# Perulangan / Iterasi

Perulangan ini berfungsi untuk mencetak bintang berbentuk segitiga

## Do-While

```mermaid

flowchart TD

A@{shape: circle, label: Start}
B@{shape: diamond, label: "x <= 4"}
C@{shape: rect, label: 'star = ""'}
D@{shape: dbl-circ, label: Stop}
E@{shape: diamond, label: "y=1"}
F@{shape: diamond, label: "y <= x"}
G@{shape: rect, label: 'star += "*"'}
H@{shape: rect, label: "y++"}
I@{shape: lean-r, label: '"{star}"'}
J@{shape: rect, label: "x++"}
K@{shape: rect, label: "x = 1"}

A --> K --> E --> C --> G --> H --> F
F --false--> I --> J --> B
B --false--> D
B --true--> E
F --true--> E
```
