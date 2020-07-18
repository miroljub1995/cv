
function switchExp<Te extends string | number, Tr>(val: Te, cases: { [caseV in Te]: () => Tr } & { 'default': () => Tr }): Tr
function switchExp<Te extends string | number, Tr>(val: Te, cases: { [caseV in Te]: () => Tr }): Tr | null
function switchExp<Te extends string | number, Tr>(val: Te, cases: { [caseV in Te]: () => Tr } & { 'default': () => Tr } | { [caseV in Te]: () => Tr }): Tr | null {
  if (val in cases)
    return cases[val]()
  if ('default' in cases)
    return cases['default']()
  return null
}

export { switchExp }