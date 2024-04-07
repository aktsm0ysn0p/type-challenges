type First<T extends any[]> = T extends [] ? never : T[0]

// 1. T extends []
// →空配列を受け取った場合、neverにする必要がある為、Conditional Type(T extends U ? X : Y)を使用して条件式を使う

// 他の解答例：
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 1. T['length'] extends 0
// →Tの配列の長さをみる。空だった場合０になる為、extends 0としている。
