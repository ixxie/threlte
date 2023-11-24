import { DAG, type AddNodeOptions, type Key } from './DAG'
import { Stage } from './Stage'

export type Schedule = ReturnType<Scheduler['getSchedule']>

export type CreateStageOptions = {
  callback?: (delta: number, runTasks: (deltaOverride?: number) => void) => void
} & AddNodeOptions<Stage>

/**
 * A Scheduler is responsible for running stages. It runs the stages in a
 * requestAnimationFrame stage.
 */
export class Scheduler extends DAG<Stage> {
  private lastTime = performance.now()
  private clampDeltaTo = 0.1

  constructor(options?: { clampDeltaTo?: number }) {
    super()
    if (options?.clampDeltaTo) this.clampDeltaTo = options.clampDeltaTo
    this.run = this.run.bind(this)
  }

  public createStage(key: Key, options?: CreateStageOptions) {
    const stage = new Stage(key, options?.callback)
    this.add(key, stage, {
      after: options?.after,
      before: options?.before
    })
    return stage
  }

  public getStage(key: Key) {
    return this.getValueByKey(key)
  }

  public removeStage = this.remove.bind(this)

  run(time: DOMHighResTimeStamp) {
    const delta = time - this.lastTime
    this.forEachNode((stage) => {
      // we pass the delta as seconds, not milliseconds,
      // this is in line with how Three.js, Unity and
      // other game engines do it. On top of that, it
      // needs to be clamped to prevent large delta
      // values from causing large jumps in the game
      // state.
      stage.run(Math.min(delta / 1000, this.clampDeltaTo))
    })
    this.lastTime = time
  }

  public getSchedule(
    include: {
      tasks?: boolean
    } = {
      tasks: true
    }
  ) {
    return {
      stages: this.mapNodes((stage) => {
        if (stage === undefined) throw new Error('Stage not found')
        return {
          key: stage.key.toString(),
          ...{ tasks: include.tasks ? stage.getSchedule() : undefined }
        }
      })
    }
  }
}
