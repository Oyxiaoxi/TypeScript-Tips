export type Entity = | { type: 'user' } | { type: 'post' } | { type: 'comment' }

// type EntityWithId = | { type: 'user'; userId: string } | { type: 'post'; postId: string } | { type: 'comment'; commentId: string }

type EntityWithId = {
  [EntityWithId in Entity['type']]: {
    type: Entity
  } & Record<`$[EntityType]id`, string>
}[Entity['type']]

const result: EntityWithId = {
  type: 'post',
  postId: '123'
}
