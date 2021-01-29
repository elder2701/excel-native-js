export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this.clear();
    this.group.push($el);
    $el.addClass(TableSelection.className);
  }

  selectGroup($el) {
    document.onmouseup = (event) =>{
      console.log(event.target);
      document.onmousedown = null;
    };
  }

  clear() {
    this.group.forEach(($el)=>$el.removeClass(TableSelection.className));
    this.group = [];
  }
}
