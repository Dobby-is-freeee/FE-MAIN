export interface AccountTableModel {
  /**
   * 식별자
   */
  id: number;
  /**
   * 협업툴
   *
   * 이후 변경 예정
   */
  tools: string;
  /**
   * 계정
   *
   * @example cskim132@gmail.com
   *
   * 이후 변경 예정
   */
  account: string;
  /**
   * 수정 여부
   *
   * 추가 or 수정 시 변경된다.
   */
  editable?: boolean;
}

export interface PublicAccountTableModel extends AccountTableModel {
  /**
   * 구분
   */
  category: string;
  /**
   * 패스워드
   */
  password: string;
}

export interface MemberProfileModel {
  /**
   * 멤버 프로필
   */
  image: string;
  /**
   * 멤버 이름
   */
  name: string;
}

export interface AccountByMemberTableModel extends AccountTableModel {
  /**
   * 멤버
   */
  member: MemberProfileModel;
}
