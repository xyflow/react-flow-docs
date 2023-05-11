---
title: <EdgeText />
sidebar_position: 8
---

import PropItems from '../../../src/components/Docs/PropItems'
import options from '../../../docs-data/edge-text';

You can use the `EdgeText` as a helper component to display text within your custom edges.

```js
import { EdgeText } from '@react-flow/core';

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

### Prop Types

<PropItems props={options} />

### TypeScript

The interface of the `EdgeText` props is exported as `EdgeTextProps`. Besides the documented props, you can also pass any standard React HTML attributes such as `onClick`, `className` and so on.
