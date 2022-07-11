import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AddProfile } from '@/assets/images';
import styled from 'styled-components';

type ProfileFormValues = {
  imgURL: string;
  nickname: string;
  position: string;
  phone: string;
  portfolioURL: string;
};
type ProfileKeywordInputs = ProfileFormValues & {
  keywords: string[];
};

export const Profile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormValues>();

  const [inputKeyword, setInputKeyword] = useState<string>('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordError, setKeywordError] = useState<boolean>(false);
  const [nameAsNickname, setNameAsNickname] = useState<string | undefined>(undefined);

  const submitHandler = (data: ProfileFormValues) => {
    const profileData = {
      data,
      keywords,
    };
    return profileData;
  };

  const keywordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputKeyword(value);
  };

  const keywordKeydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key === ' ' && inputKeyword.length && !keywords.includes(inputKeyword)) {
      e.preventDefault();
      setKeywords((prev) => [...prev, inputKeyword]);
      setInputKeyword('');
    }
  };

  const removeKeyword = (removedKeyword: string) => {
    const filteredKeywords = keywords.filter((keyword) => keyword !== removedKeyword);
    setKeywords(filteredKeywords);
  };

  const Form = styled.form`
    width: 500px;
    margin: 5rem auto;
  `;
  const FormGroup = styled.div`
    margin: 2rem 0;
  `;

  const FormGroupTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
      color: #faad18;
    }
  `;

  const FieldGroup = styled.div`
    padding: 1.5rem;
    border: 1.5px solid #e3e3e3;
    border-radius: 5px;
  `;

  const Field = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1.5px solid #e3e3e3;
    padding: 1rem 0;
    &:last-child {
      border-bottom: none;
    }
  `;

  const ErrorMessage = styled.p`
    font-size: 12px;
    color: #eb5656;
  `;

  return (
    <div>
      <Form
        onSubmit={() => {
          handleSubmit(submitHandler);
        }}>
        <FormGroup>
          <FormGroupTitle>
            <h1>기본 정보</h1>
            <p>
              <span>*</span> 필수 입력 항목
            </p>
          </FormGroupTitle>
          <FieldGroup>
            <Field>
              <label>
                이미지<span>*</span>
              </label>
              <div>
                <input type="file" {...register('imgURL', { required: true })} />
                <div>
                  <p>이미지를 업로드하세요</p>
                  <p>Apro go에서 팀원들이 회원님을 쉽게 알아볼 수 있습니다.</p>
                </div>
                {errors.imgURL && <p>이미지를 업로드해주세요</p>}
              </div>
            </Field>
            <Field>
              <label>
                닉네임<span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  {...register('nickname', { required: true, maxLength: 16 })}
                  placeholder="한글/영어 16자 이내"
                />
                <div>
                  <input type="checkbox" name="이름사용" onClick={() => reset({ nickname: nameAsNickname })} />
                  <label htmlFor="이름사용">이름사용</label>
                </div>
                {errors.nickname && <p>필수항목을 입력해주세요</p>}
              </div>
            </Field>
            <Field>
              <label>
                포지션<span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  {...register('position', { required: true })}
                  placeholder="예시_ 기획자/디자이너/개발자"
                />
                {errors.position && <p>필수항목을 입력해주세요</p>}
              </div>
            </Field>
            <Field>
              <label>
                키워드 (3개)<span>*</span>
              </label>
              <ul>
                {keywords.map((keyword, index) => {
                  return (
                    <div key={index}>
                      {keyword}
                      <span onClick={() => removeKeyword(keyword)}>Delete</span>
                    </div>
                  );
                })}
                <input
                  type="text"
                  placeholder="나를 표현할 수 있는 키워드 3개를 작성해주세요"
                  value={inputKeyword}
                  onChange={keywordChangeHandler}
                  onKeyDown={keywordKeydownHandler}
                />
                {keywordError && <p>필수항목을 입력해주세요</p>}
              </ul>
            </Field>
          </FieldGroup>
        </FormGroup>
        <FormGroup>
          <FormGroupTitle>
            <h1>연락 정보</h1>
          </FormGroupTitle>
          <FieldGroup>
            <Field>
              <label>
                나의 대표 연락처<span>*</span>
              </label>
              <div>
                <input type="text" {...register('phone', { required: true })} placeholder="000-0000-0000" />
                {errors.phone && <p>필수항목을 입력해주세요</p>}
              </div>
            </Field>
            <Field>
              <label>
                포트폴리오 사이트<span>*</span>
              </label>
              <input
                type="text"
                {...register('portfolioURL')}
                placeholder="나만의 작업들을 뽐낼 수 있는 파일이나 링크를 업로드해주세요"
              />
            </Field>
          </FieldGroup>
        </FormGroup>
        <div>
          <button>임시저장</button>
          <button type="submit">프로필 완성</button>
        </div>
      </Form>
    </div>
  );
};
