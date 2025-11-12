export interface NavEntry {
  text: string;
  href: string;
  dropdown?: NavEntry[];
}
