const elem = document.getElementById('storageTest')
const isStorageSupported = typeof window.Storage !== 'undefined'

if (isStorageSupported) {
  const ls = window.localStorage

  ls.setItem('val0', '0')
  ls.val1 = '1'

  console.log(ls)
  console.log(ls.val0)
}