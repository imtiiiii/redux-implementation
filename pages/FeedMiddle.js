import React from "react";
import { useState } from "react";
import {
  Input,
  Dropdown,
  Menu,
  Button,
  Modal,
  Upload,
  message,
  Checkbox,
} from "antd";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectProfile } from "../app/store/slices/profile";
const FeedMiddle = () => {
  const data = useSelector(selectProfile);
  console.log("data example initial", data);

  const likePressed = () => { 
    console.log("like called");
  }

  function destroyAll() {
    Modal.destroyAll();
  }
  {
    /* for fileupload */
  }
  const props = {
    headers: {
      authorization: "authorization-text",
    },
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    name: "file",
  };
  {
    /* for fileupload */
  }
  {
    /* for modal */
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  {
    /* for modal */
  }
  {
    /* for image modal */
  }
  const [isModalVisible1, setIsVisible1] = useState(false);
  const showModal1 = () => {
    setIsVisible1(true);
  };
  const handleOk1 = () => {
    setIsVisible1(false);
  };
  const handleCancel1 = () => {
    console.log("called");
    setIsVisible1(false);
  };
  {
    /* for image modal */
  }
  {
    /* Textarea */
  }
  const { TextArea } = Input;
  {
    /* Textarea */
  }
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  const onChange2 = (e) => {
    console.log("Change:", e.target.value);
  };
 


  

  return (
    <>
      <div className="_custom_col_xl_6 _custom_col_lg_6 _custom_col_md_12 _custom_col_sm_12">
        <div className="_layout_middle_wrap">
          <div className="_layout_middle_inner">
            <div className="_feed_inner_text_area _feed_middle_inner">
              <div className="_feed_inner_txt_box_area">
                <div className="_feed_inner_txt_box_image">
                  <Image
                    layout="fill"
                    src="/../../img/man1.png"
                    alt=""
                    className="_feed_img"
                  />
                </div>

                <div className="_feed_inner_timeline_post_area  _feed_middle_inner">
                  <div className="_feed_inner_timeline_content">
                    <div className="_feed_inner_timeline_post_top">
                      <div className="_feed_inner_timeline_post_box">
                        <div className="_feed_inner_timeline_post_box_txt">
                          <a href="/profile">
                            <h4 className="_feed_inner_timeline_post_box_title">
                              Martin Vaccaro 2
                            </h4>
                          </a>
                          <div className="_feed_inner_timline_area">
                            <p className="_feed_inner_timeline_post_box_para">
                              5 minute ago .
                            </p>
                           
                          </div>
                        </div>
                      </div>
                      <div className="_feed_inner_timeline_post_box_dropdown">
                        
                      </div>
                    </div>
                    <h4 className="_feed_inner_timeline_post_title">
                      - Photoshop Feedback
                    </h4>
                    <div className="_hash_btn">
                      <Button className="_hash_btn_link">
                        #photoshop_Feedback
                      </Button>
                    </div>
                    <p className="_feed_post_description">
                      { data.name.content}
                    </p>

                    <div className="_card_file_post_area">
                      <ul className="_card_file_post_area_ul  d-flex">
                        <li className="_card_file_post_area_li">
                    
                        </li>
                      </ul>
                    </div>

                    <div className="_feed_inner_timeline_reaction">
                      <ul className="_feed_inner_timeline_reaction_list">
                        <li className="_feed_inner_timeline_reaction_item">
                          <button className="_feed_inner_timeline_reaction_link">
                            <span className="_like_btn _like_btn-post unselectable">
                              <div className="_status_reaction _active_like">
                                <svg
                                  className="d-none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="{21}"
                                  height="{21}"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#586ED1"
                                  strokewidth="{2}"
                                  strokelinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                                </svg>
                                <div className="_inline_post_emoji  _no_anim">
                                  <div className="_emoji _emoji_love ">
                                    <div className="_emoji_heart"></div>
                                  </div>
                                  <div className="_emoji _emoji_like d-none">
                                    <div className="_emoji_hand">
                                      <div className="_emoji_thumb"></div>
                                    </div>
                                  </div>
                                  <div className="_emoji _emoji_wow d-none">
                                    <div className="_emoji_face">
                                      <div className="_emoji_eyebrows"></div>
                                      <div className="_emoji_eyes"></div>
                                      <div className="_emoji_mouth"></div>
                                    </div>
                                  </div>
                                  <div className="_emoji _emoji_sad d-none">
                                    <div className="_emoji_face">
                                      <div className="_emoji_eyebrows"></div>
                                      <div className="_emoji_eyes"></div>
                                      <div className="_emoji_mouth"></div>
                                    </div>
                                  </div>
                                </div>
                                <p onClick={likePressed} className="_feed_inner_timeline_reaction_para">
                                  <span>{ data.name.like_count}</span> Like
                                </p>
                              </div>
                            </span>
                            <ul className="_reactions_box">
                              <li className="_reaction _reaction_1">
                                <div className="_emoji _emoji_like">
                                  <div className="_emoji_hand">
                                    <div className="_emoji_thumb" />
                                  </div>
                                </div>
                              </li>
                              <li className="_reaction _reaction_2">
                                <div className="_emoji _emoji_love">
                                  <div className="_emoji_heart" />
                                </div>
                              </li>
                              <li className="_reaction _reaction_3">
                                <div className="_emoji _emoji_wow">
                                  <div className="_emoji_face">
                                    <div className="_emoji_eyebrows" />
                                    <div className="_emoji_eyes" />
                                    <div className="_emoji_mouth" />
                                  </div>
                                </div>
                              </li>
                              <li className="_reaction _reaction_4">
                                <div className="_emoji _emoji_sad">
                                  <div className="_emoji_face">
                                    <div className="_emoji_eyebrows" />
                                    <div className="_emoji_eyes" />
                                    <div className="_emoji_mouth" />
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </button>
                        </li>
                        <li className="_feed_inner_timeline_reaction_item">
                          <button className="_feed_inner_timeline_reaction_link">
                            <span className="_like_btn _like_btn-post unselectable">
                              <div className="_status_reaction _active_like">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={18}
                                  height={18}
                                  fill="none"
                                  viewBox="0 0 18 18"
                                >
                                  <path
                                    stroke="#586ED1"
                                    d="M1 9a8 8 0 018-8v0a8 8 0 018 8v5.09c0 .848 0 1.27-.126 1.609a2 2 0 01-1.175 1.175C15.36 17 14.938 17 14.09 17H9a8 8 0 01-8-8v0z"
                                  />
                                  <path
                                    stroke="#586ED1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 8h6M9 12h3"
                                  />
                                </svg>
                                <p className="_feed_inner_timeline_reaction_para">
                                  <span>0</span> Comment
                                </p>
                              </div>
                            </span>
                          </button>
                        </li>
                        <li className="_feed_inner_timeline_reaction_item">
                          <button className="_feed_inner_timeline_reaction_link">
                            <span className="_like_btn _like_btn-post unselectable">
                              <div className="_status_reaction _active_like">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={21}
                                  height={18}
                                  fill="none"
                                  viewBox="0 0 21 18"
                                >
                                  <path
                                    stroke="#586ED1"
                                    strokeLinejoin="round"
                                    d="M20 9l-8.708-8v4.571C2.958 5.571 1 11.322 1 17c2.405-2.964 4.532-4.571 10.292-4.571V17L20 9z"
                                  />
                                </svg>
                                <p className="_feed_inner_timeline_reaction_para">
                                  <span>0</span> Share
                                </p>
                              </div>
                            </span>
                          </button>
                        </li>
                        <li className="_feed_inner_timeline_reaction_item">
                          <button className="_feed_inner_timeline_reaction_link">
                            <span className="_like_btn _like_btn-post unselectable">
                              <div className="_status_reaction _active_like">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={18}
                                  fill="none"
                                  viewBox="0 0 16 18"
                                >
                                  <path
                                    stroke="#586ED1"
                                    d="M1 6.528c0-2.606 0-3.909.769-4.718C2.538 1 3.775 1 6.25 1h3.5c2.475 0 3.712 0 4.481.81C15 2.62 15 3.922 15 6.528v6.29c0 2.472 0 3.708-.739 4.086-.738.378-1.662-.385-3.508-1.913l-.59-.488c-1.039-.86-1.558-1.289-2.163-1.289-.605 0-1.124.43-2.162 1.289l-.591.488c-1.846 1.528-2.77 2.291-3.508 1.913C1 16.526 1 15.29 1 12.818v-6.29z"
                                  />
                                </svg>
                                <p className="_feed_inner_timeline_reaction_para">
                                  <span>0</span> Save
                                </p>
                              </div>
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="_feed_inner_timeline_comment_area">
                      <div className="_feed_inner_comment_box">
                        <form className="_feed_inner_comment_box_form">
                          <div className="_feed_inner_comment_box_content">
                            <div className="_feed_inner_comment_box_content_image">
                              <Image
                                layout="fill"
                                src="/../../img/comment_img.png"
                                className="_comment_img"
                                alt="pic"
                              />
                            </div>
                            <div className="_feed_inner_comment_box_content_txt">
                              <TextArea
                                className="_comment_textarea"
                                rows={2}
                                placeholder="comment"
                                onChange={onChange2}
                                autoSize={{ minRows: 1, maxRows: 10 }}
                              />
                            </div>
                          </div>
                          <div className="_feed_inner_comment_box_icon">
                            <button
                              type="submit"
                              className="_feed_inner_comment_box_icon_btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="none"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill="#000"
                                  fillOpacity=".46"
                                  fillRule="evenodd"
                                  d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                            <button
                              type="submit"
                              className="_feed_inner_comment_box_icon_btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="none"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill="#000"
                                  fillOpacity=".46"
                                  fillRule="evenodd"
                                  d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zm.426 5.733l.017.015.013.013.009.008.037.037c.12.12.453.46 1.443 1.477a.5.5 0 11-.716.697S10.73 8.91 10.633 8.816a.614.614 0 00-.433-.118.622.622 0 00-.421.225c-1.55 1.88-1.568 1.897-1.594 1.922a1.456 1.456 0 01-2.057-.021s-.62-.63-.63-.642c-.155-.143-.43-.134-.594.04l-1.02 1.076a.498.498 0 01-.707.018.499.499 0 01-.018-.706l1.018-1.075c.54-.573 1.45-.6 2.025-.06l.639.647c.178.18.467.184.646.008l1.519-1.843a1.618 1.618 0 011.098-.584c.433-.038.854.088 1.19.363zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeedMiddle;
