/**
 * Variants by size – different colors/categories for carousel in each section
 * Used in 1ml, 3ml, 4ml, 5ml, 6ml sections
 */

import { PAINT_BOX_IMAGES } from './paintImages'

const variant = (imageIdx, nameEn, nameAr, color) => ({
  image: PAINT_BOX_IMAGES[imageIdx % PAINT_BOX_IMAGES.length],
  nameEn,
  nameAr,
  color,
})

// Variants per size: different categories/colors of paint for that size
export const VARIANTS_BY_SIZE = {
  '1ml': [
    variant(0, 'Epoxy Sample', 'عينة إيبوكسي', 'Blue'),
    variant(1, 'Anti-Corrosion', 'مضاد للتآكل', 'Teal'),
    variant(2, 'Industrial Clear', 'شفاف صناعي', 'White'),
    variant(3, 'Metal Primer', 'أساس معدني', 'Grey'),
    variant(4, 'Touch-Up Kit', 'طقم لمسات', 'Multi'),
  ],
  '3ml': [
    variant(0, 'Epoxy 3ML Blue', 'إيبوكسي 3 مل أزرق', 'Blue'),
    variant(1, 'Epoxy 3ML Teal', 'إيبوكسي 3 مل تركواز', 'Teal'),
    variant(2, 'Corrosion Inhibitor', 'مانع تآكل', 'Amber'),
    variant(3, 'Industrial Grey', 'رمادي صناعي', 'Grey'),
    variant(4, 'Assorted Colors', 'ألوان متعددة', 'Multi'),
  ],
  '4ml': [
    variant(1, 'Epoxy 4ML', 'إيبوكسي 4 مل', 'Blue'),
    variant(2, 'Spot Repair', 'إصلاح البقع', 'Orange'),
    variant(3, 'Primer 4ML', 'أساس 4 مل', 'Grey'),
    variant(4, 'Gloss Finish', 'لمعة', 'White'),
    variant(5, 'Steel Container', 'حاوية فولاذية', 'Silver'),
  ],
  '5ml': [
    variant(0, 'Industrial Epoxy', 'إيبوكسي صناعي', 'Blue'),
    variant(2, 'Workshop Bucket', 'دلو ورشة', 'Orange'),
    variant(4, 'Assorted 5ML', '5 مل ألوان', 'Multi'),
    variant(5, 'Cans Set', 'مجموعة علب', 'Multi'),
    variant(6, 'Industrial Bucket', 'دلو صناعي', 'Silver'),
  ],
  '6ml': [
    variant(0, 'Heavy-Duty Blue', 'ثقيل أزرق', 'Blue'),
    variant(1, '6ML with Brush', '6 مل مع فرشاة', 'Blue'),
    variant(3, 'Epoxy 6ML', 'إيبوكسي 6 مل', 'Grey'),
    variant(4, 'Multi-Color Set', 'مجموعة ألوان', 'Multi'),
    variant(6, 'Industrial Bucket', 'دلو صناعي', 'Silver'),
  ],
}

export function getVariantsForSize(sizeId) {
  return VARIANTS_BY_SIZE[sizeId] || []
}
