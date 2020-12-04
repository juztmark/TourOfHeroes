export interface Sort {
  sortBy: string;
  sortType: 'asc' | 'desc';
}

export let itemSortOptions: string[] = ['id', 'name', 'price'];
export let heroSortOptions: string[] = ['id', 'name', 'money'];
export let sortTypes: string[] = ['asc', 'desc'];
