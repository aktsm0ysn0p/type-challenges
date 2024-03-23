type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K
}

// extends readonly PropertyKey[]
// 引数をPropertyKey(string | number | symbol)に絞る

// T[number]
// index access を使用してタプルの中身を取り出す

// [K in T[number]]: K
// タプルの中身をKに代入し、keyとvalueに設定する
