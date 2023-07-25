# Several ways to customize a Vision

#### 1. Maintain a vision struct

```typescript
/** 1. define a vision struct */
type Component = { name: string }

/** 2. config this vision struct by some Panel way */
interface Panel<Component> {}

/** 3. switch this vision struct to JSON string, and commit it to remote */
interface DataBase<Component JSON String> {}

/** 4. show this vision struce by view engine like Vue、React */
interface ViewEngine<Component> {}
```

> 🥺It's hard to keep old vision effective, when struct changing happen.

#### 2. Maintain a tree struct

```typescript
/** 1. define a value node, and we will get a flexible struct by Lego Tree
 * @mean View <View, VisionName, null>
 * @mean View Setting <ViewSetting, Nut, Screw>
*/
type LinkedNode = { parentId; }
enum LegoType { ...VIEW, ...CONTENT, ...EMIT }
type LegoNode = { type: LegoType; value: string; }

/** 2. config this vision struct by some Panel way */
interface Panel<Component> {}

/** 3. commit Lego Node to remote */
interface DataBase<LegoNode> {}

/** 4. show this vision struce by view engine like Vue、React */
interface ViewEngine<Component> {}
```
