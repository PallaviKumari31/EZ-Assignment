export const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isPhone = v => /^(?=.{7,15}$)[+]?[-0-9()\s]+$/.test(v.trim());
export const isNonEmpty = v => v.trim().length > 0;