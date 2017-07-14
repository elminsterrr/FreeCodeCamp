// Operator "spread" umożliwia rozbicie danego wyrażenia na elementy (podczas przypisania).
// Operator "spread" może też być z powodzeniem stosowany,	na przykład, do budowania nowych tablic:
let	tablicaJeden	=	[1,	2, 3];
let	drugaTablicaJeden	=	[10, 11, ...tablica, 20];

console.log(drugaTablicaJeden);	//	[10,	11,	1,	2,	3,	20]

// Na	tej	samej	zasadzie	łatwo	go	użyć	do	kopiowania	tablic:
let	tablicaDwa	=	[1, 2, 3];
let	drugaTablicaDwa =	[ ...tablica ];

console.log(drugaTablicaDwa);	// [1, 2, 3]
