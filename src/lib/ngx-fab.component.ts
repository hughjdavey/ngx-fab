import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'ngx-fab',
  templateUrl: './ngx-fab.component.html',
  styleUrls: [ './ngx-fab.component.css' ],
})
export class NgxFabComponent {

  @Input()
  backgroundColor: string = 'crimson';

  @Input()
  fabSize: FabSize = 'medium';

  @Input()
  iconClass: string = 'fa fa-plus';

  @Input()
  iconColor: string;

  @Input()
  position: FabPosition = 'bottom-right';

  @Input()
  additionalX: number = 0;

  @Input()
  additionalY: number = 0;

  constructor(private elementRef: ElementRef) { }

  background(): Object {
    return {
      'background-color': this.backgroundColor,
      'border-color': this.backgroundColor,
    };
  }

  icon(): string {
    return `${this.iconClass} ${this.fabSize === 'large' ? 'fa-2x' : this.fabSize === 'medium' ? 'fa-lg' : ''}`;
  }

  color(): string {
    return this.iconColor || this.defaultIconColor();
  }

  size(): string {
    return `fab-${this.fabSize}`;
  }

  positionStyle(): Object {
    const parentBoundingRect = this.elementRef.nativeElement.parentElement.getBoundingClientRect();
    const fabWidth = this.fabSize === 'small' ? 40 : this.fabSize === 'medium' ? 60 : 100;
    const desiredOffsetX = (fabWidth / 3) + this.additionalX;
    const desiredOffsetY = (fabWidth / 3) + this.additionalY;

    const leftLeft = `${parentBoundingRect.left + desiredOffsetX}px`;
    const leftMid = `${parentBoundingRect.left + (parentBoundingRect.width / 2) - (fabWidth / 2) + this.additionalX}px`;
    const leftRight = `${parentBoundingRect.right - (fabWidth + desiredOffsetX)}px`;

    const topTop = `${parentBoundingRect.top + desiredOffsetY}px`;
    const topMid = `${parentBoundingRect.top + (parentBoundingRect.height / 2) - (fabWidth / 2) + this.additionalY}px`;
    const topBottom = `${parentBoundingRect.bottom - (fabWidth + desiredOffsetY)}px`;

    switch (this.position) {
      case 'top-left': return { top: topTop, left: leftLeft };
      case 'top-middle': return { top: topTop, left: leftMid };
      case 'top-right': return { top: topTop, left: leftRight };
      case 'middle-left': return { top: topMid, left: leftLeft };
      case 'middle-right': return { top: topMid, left: leftRight };
      case 'middle-middle': return { top: topMid, left: leftMid };
      case 'bottom-left': return { top: topBottom, left: leftLeft };
      case 'bottom-middle': return { top: topBottom, left: leftMid };
      case 'bottom-right': return { top: topBottom, left: leftRight };
    }
  }

  // inspired by this SO answer https://stackoverflow.com/a/3943023
  private defaultIconColor(): string {
    const colorHex = this.standardizeColor(this.backgroundColor);

    if (!colorHex || colorHex.length !== 7) {
      return 'white';
    }

    const sRGBs = [ colorHex.substring(1, 3), colorHex.substring(3, 5), colorHex.substring(5, 7) ].map(s => parseInt(s, 16));
    return (sRGBs[0] * 0.299 + sRGBs[1] * 0.587 + sRGBs[2] * 0.114) > 186 ? 'black' : 'white';
  }

  // inspired by JayB's comment on this SO answer https://stackoverflow.com/a/24390910
  private standardizeColor(colorName): string {
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = colorName;
    return ctx.fillStyle.toString();
  }
}

export type FabPosition = 'top-left' | 'top-middle' | 'top-right' | 'middle-left' | 'middle-middle' | 'middle-right' | 'bottom-left' | 'bottom-middle' | 'bottom-right';

export type FabSize = 'small' | 'medium' | 'large';
