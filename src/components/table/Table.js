import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.function';
import {TableSelection} from './TableSelection';
import {$} from '@core/dom';
import {isCell} from './table.function';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {listeners: ['mousedown']});
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();
    const $cell = this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    } else if (isCell(event)) {
      const $target = $(event.target);
      if (event.target.shiftKey) {

      } else {
        this.selection.select($target);
      }
    }
  }
}
