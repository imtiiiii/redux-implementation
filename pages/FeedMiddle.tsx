import React, { useEffect } from "react";
("use strict");
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
  Form,
} from "antd";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, setProfileData } from "../app/store/slices/profile";

const FeedMiddle = () => {
  const [Form1] = Form.useForm();
  const [Form2] = Form.useForm();
  const dispatch = useDispatch();
  let init = useSelector(selectProfile);
  init = JSON.parse(JSON.stringify(init));
  console.log("init", init);
  let [data, setData] = useState(init.name);
  const [parentIndex, setParentIndex] = useState(-1);
  const replyComment = (ind: any) => {
    console.log("ind is ", ind);
    setParentIndex(ind);
  };
  const handleReplyComment = (values: any) => {
    data = JSON.parse(JSON.stringify(data));

    const reply = values[parentIndex];
    if (!reply) return;

    let temp = data.comments[parentIndex];

    temp.reply.push({ content: reply });

    data.comments[parentIndex] = temp;
    dispatch(setProfileData(data));
    setData(data);
    Form2.setFieldValue(values.parentIndex, "");
  };

  const handleComment = (values: any) => {
    if (!values.comments) return;
    data = JSON.parse(JSON.stringify(data));
    const saveComments = {
      content: values.comments,
      owner_id: 2,
      post_id: 1,
      reply: [],
    };

    let temp = data?.comments;
    temp.push(saveComments);
    data.comments = temp;

    dispatch(setProfileData(data));
    setData(data);
    Form1.setFieldValue("comments", "");
  };

  const likePressed = () => {
    console.log("like called");
  };

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
  const { TextArea } = Input;

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
                      <div className="_feed_inner_timeline_post_box_dropdown"></div>
                    </div>
                    <h4 className="_feed_inner_timeline_post_title">
                      - Photoshop Feedback
                    </h4>
                    <div className="_hash_btn">
                      <Button className="_hash_btn_link">
                        #photoshop_Feedback
                      </Button>
                    </div>
                    <p className="_feed_post_description">{data.content}</p>

                    <div className="_feed_inner_timeline_reaction">
                      <ul className="_feed_inner_timeline_reaction_list">
                        <li className="_feed_inner_timeline_reaction_item">
                          <button
                            onClick={likePressed}
                            className="_feed_inner_timeline_reaction_link"
                          >
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
                                  strokeWidth="{2}"
                                  strokeLinecap="round"
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
                                <p className="_feed_inner_timeline_reaction_para">
                                  <span>{data.like_count}</span> Like
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
                    <Form form={Form1} onFinish={handleComment}>
                      <div
                        style={{ padding: "20px 0px" }}
                        className="_feed_inner_timeline_comment_area"
                      >
                        <div className="_feed_inner_comment_box">
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
                              <Form.Item name="comments">
                                <TextArea
                                  className="_comment_textarea"
                                  rows={2}
                                  placeholder="comment"
                                  autoSize={{ minRows: 1, maxRows: 10 }}
                                />
                              </Form.Item>
                              <Button
                                style={{ padding: "10px 0px" }}
                                type="primary"
                                htmlType="submit"
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                    <div>
                      {data.comments.map((el: any, index1: any) => {
                        return (
                          <div key={index1}>
                            <h6>{el.content}</h6>
                            {el.reply.map((rep: any, index2: any) => {
                              return (
                                <div style={{ padding: "0 40px" }} key={index2}>
                                  <p>{rep.content}</p>
                                </div>
                              );
                            })}
                            <Form onFinish={handleReplyComment} form={Form2}>
                              <div
                                style={{ padding: "0 40px" }}
                                className="_feed_inner_comment_box_content_txt"
                              >
                                <Form.Item name={index1}>
                                  <TextArea
                                    className="_comment_textarea"
                                    rows={2}
                                    placeholder="reply...."
                                    autoSize={{ minRows: 1, maxRows: 10 }}
                                  />
                                </Form.Item>
                                <Button
                                  onClick={() => replyComment(index1)}
                                  type="primary"
                                  htmlType="submit"
                                >
                                  send reply
                                </Button>
                              </div>
                            </Form>
                          </div>
                        );
                      })}
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
