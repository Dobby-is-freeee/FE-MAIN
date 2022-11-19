export const env = {
  /**
   * 모드 여부
   *
   * production or development
   */
  mode: process.env.NODE_ENV || 'development',
  /**
   * 상용 모드 여부
   */
  isProduction: process.env.NODE_ENV === 'production',
};
