---
title: EdgeText
sidebar_position: 4
---

You can use the `EdgeText` as a helper component to display text within your custom edges.

```js
import { EdgeText } from 'react-flow-renderer';

<EdgeText
  x={100}
  y={100}
  label="a label"
  labelStyle={{ fill: 'white' }}
  labelShowBg
  labelBgStyle={{ fill: 'red' }}
  labelBgPadding={[2, 4]}
  labelBgBorderRadius={2}
/>;
```

Besides the mentioned props you can pass all standard React HTML attributes like `onClick`, `className` and so on.
