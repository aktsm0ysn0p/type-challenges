type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

// K extnds keyof T → Tだけだと型が広すぎるため、限定させる
// [key in K] → K = 'title' | 'completed' のようなUnionを持っている為、それをバラしてkeyに格納する。
// T[key] → key = 'title'、key =’complete’になっている為、T[key]としてあげる
