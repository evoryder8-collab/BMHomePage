export const STUDIO_PERPETUAL_PRICE = 249;

export interface RoiResult {
  monthlyRevenue: number;
  shootsToPayOff: number;
}

/** Earnings math for the Studio ROI story: charge `fee` per adapted shoot,
 *  do `shoots` shoots a month. */
export function roi(shoots: number, fee: number): RoiResult {
  const s = Math.max(0, Math.floor(shoots));
  const f = Math.max(0, fee);
  return {
    monthlyRevenue: s * f,
    shootsToPayOff: f > 0 ? Math.ceil(STUDIO_PERPETUAL_PRICE / f) : Infinity,
  };
}
