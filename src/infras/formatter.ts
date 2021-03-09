export const formatBirth = (src: string, format: 'YYYY-MM-DD' | 'YYMMDD' = 'YYYY-MM-DD') => {
  if (format === 'YYYY-MM-DD') {
    if (/^[\d]{6}$/.test(src)) {
      const year = src.substring(0, 2)
      const month = src.substring(2, 4)
      const date = src.substring(4, 6)
      return `${year > '50' ? '19' : '20'}${year}-${month}-${date}`
    } else if (/^[\d]{4}-[\d]{2}-[\d]{2}$/.test(src)) {
      return src
    }
  } else {
    if (/^[\d]{6}$/.test(src)) {
      return src
    } else if (/^[\d]{4}-[\d]{2}-[\d]{2}$/.test(src)) {
      return src.split('-').join('')
    }
  }
}
