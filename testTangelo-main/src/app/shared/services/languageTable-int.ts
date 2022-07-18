import {MatPaginatorIntl} from "@angular/material/paginator";

const getRangeLabel = (page: number, pageSize: number, length: number) =>  {
  if (length === 0 || pageSize === 0) {
    return `0 / ${length}`;
  }

  const startIndex = page;
  return `${startIndex + 1}`;
}

export function LanguageTable() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Cantidad:';
  paginatorIntl.nextPageLabel = 'pagina';
  paginatorIntl.previousPageLabel = 'Vorige pagina';
  paginatorIntl.getRangeLabel = getRangeLabel;

  return paginatorIntl;
}
