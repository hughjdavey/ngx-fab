# ngx-fab

Simple floating action buttons for Angular >= 2

[Demo can be found here](https://hughjdavey.github.io/ngx-fab)

### Installation

* `npm install --save ngx-fab`
* Edit your app.module file:

``` typescript
...
import { NgxFabModule } from 'ngx-fab';

@NgModule({
  ...
  imports: [
    ...
    NgxFabModule
  ],
  ...
})
```

### Usage

##### Type Definitions:

* `type FabSize = 'small' | 'medium' | 'large'`
* `type FabPosition = 'top-left' | 'top-middle' | 'top-right' | 'middle-left' | 'middle-middle' | 'middle-right' | 'bottom-left' | 'bottom-middle' | 'bottom-right'`

##### `@Input()` options:

* `backgroundColor` [string] - HTML color name or hexcode for background color (defaults to 'crimson')
* `fabSize` [FabSize] - fab size, 40, 60 or 100px respectively (defaults to 'medium')
* `iconClass` [string] - font awesome icon classes from 'fa', 'fab', 'far' or 'fas' collections (defaults to 'fa fa-plus')
* `iconColor` [string] - HTML color name or hexcode for icon color (defaults to 'black' or 'white' depending on `backgroundColor`)
* `position` [FabPosition] - position of fab within container (defaults to 'bottom-right')
* `additionalX` [float] - additional positive or negative offset on the x-axis used for custom positioning (defaults to 0)
* `additionalY` [float] - additional positive or negative offset on the y-axis used for custom positioning (defaults to 0)

### Examples

##### deafault FAB - bottom right, crimson background, plus icon
* `<ngx-fab></ngx-fab>`

##### custom background color, icon and position
* `<ngx-fab [backgroundColor]="'#88B04B'" [iconClass]="'fas fa-atom'" [position]="'top-middle'"></ngx-fab>`

##### custom icon and icon color
* `<ngx-fab [backgroundColor]="'yellow'" [iconClass]="'fas fa-plus'" [iconColor]="'#ff00ff'"></ngx-fab>`

##### custom sizes
* `<ngx-fab [backgroundColor]="'crimson'" [iconClass]="'fas fa-star'" [fabSize]="'small'"></ngx-fab>`
* `<ngx-fab [backgroundColor]="'crimson'" [iconClass]="'fas fa-star'" [fabSize]="'large'"></ngx-fab>`

##### custom positioning via `additionalX` to form a row of 3
* `<ngx-fab [iconClass]="'fas fa-star'" [position]="'middle-middle'" [fabSize]="'small'" [additionalX]="-50"></ngx-fab>`
* `<ngx-fab [iconClass]="'fas fa-star'" [position]="'middle-middle'" [fabSize]="'small'"></ngx-fab>`
* `<ngx-fab [iconClass]="'fas fa-star'" [position]="'middle-middle'" [fabSize]="'small'" [additionalX]="50"></ngx-fab>`
