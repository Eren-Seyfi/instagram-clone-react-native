import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path, Rect, Mask } from "react-native-svg";

function Logo({ size, ...pops }) {
  return (
    <Svg width="101" height="36" viewBox="0 0 101 36">
      <Path
        d="M7.77132 5.89293C5.82608 6.70718 3.68762 9.00753 3.01222 11.895C2.15689 15.5535 5.71634 17.1005 6.00829 16.5933C6.35191 15.9972 5.37048 15.7957 5.16845 13.8975C4.90736 11.4458 6.04714 8.70631 7.4816 7.5043C7.74824 7.28098 7.73556 7.59181 7.73556 8.16674C7.73556 9.19485 7.67875 18.4243 7.67875 20.3505C7.67875 22.9568 7.57109 23.7799 7.37775 24.5932C7.18185 25.4173 6.86691 25.9742 7.10556 26.1887C7.37218 26.4287 8.51059 25.8579 9.16963 24.9381C9.95991 23.8349 10.2365 22.5101 10.2862 21.0713C10.3462 19.337 10.3436 16.5848 10.3462 15.0151C10.3486 13.5753 10.3705 9.35952 10.321 6.82512C10.3088 6.20348 8.58482 5.55129 7.77122 5.89218L7.77132 5.89293ZM76.8465 18.0906C76.7838 19.4456 76.4838 20.5047 76.1116 21.2517C75.3909 22.698 73.8955 23.147 73.2606 21.068C72.9146 19.9347 72.8985 18.0421 73.1472 16.4606C73.4004 14.8495 74.1075 13.6328 75.2783 13.7426C76.4331 13.851 76.9737 15.3391 76.8465 18.0905V18.0906ZM57.3782 26.4973C57.3626 28.7487 57.0082 30.7227 56.2484 31.296C55.1707 32.109 53.7222 31.4992 54.0221 29.8563C54.2875 28.4025 55.5426 26.9178 57.3813 25.1038C57.3813 25.1038 57.3851 25.5175 57.3783 26.4973H57.3782ZM57.0839 18.0775C57.018 19.3116 56.6981 20.5514 56.349 21.2519C55.6285 22.6981 54.1222 23.1503 53.498 21.0682C53.0712 19.6456 53.1735 17.8045 53.3846 16.6444C53.6586 15.1392 54.3228 13.7429 55.5157 13.7429C56.6755 13.7429 57.2474 15.0153 57.0839 18.0776V18.0775ZM45.8059 18.0586C45.7352 19.3657 45.4802 20.4583 45.071 21.2519C44.3307 22.6882 42.866 23.1437 42.22 21.0682C41.7544 19.5716 41.9129 17.531 42.1066 16.4286C42.3941 14.7928 43.1139 13.633 44.2377 13.7429C45.3921 13.8557 45.9532 15.3392 45.8059 18.0587V18.0586ZM97.4904 19.5853C97.2082 19.5853 97.0794 19.8762 96.9729 20.3658C96.6033 22.0682 96.2149 22.4526 95.7141 22.4526C95.1545 22.4526 94.6517 21.6096 94.5225 19.9222C94.4209 18.5953 94.4372 16.1525 94.5671 13.7226C94.5936 13.2233 94.4559 12.7293 93.1168 12.2429C92.5406 12.0336 91.703 11.7255 91.2859 12.7322C90.1076 15.5763 89.6466 17.8343 89.5381 18.7515C89.5325 18.799 89.4743 18.8087 89.4641 18.6978C89.395 17.9631 89.2404 16.6281 89.2212 13.8232C89.2175 13.2759 89.1016 12.8101 88.4975 12.4287C88.1056 12.1813 86.9154 11.7436 86.4869 12.2643C86.1156 12.6901 85.6856 13.8362 85.2388 15.1946C84.8757 16.2987 84.6228 17.0456 84.6228 17.0456C84.6228 17.0456 84.6276 14.0665 84.6319 12.9365C84.6338 12.5102 84.3414 12.3681 84.2532 12.3424C83.8563 12.2272 83.0744 12.0347 82.7425 12.0347C82.333 12.0347 82.2327 12.2637 82.2327 12.5972C82.2327 12.6409 82.168 16.5195 82.168 19.2316C82.168 19.3494 82.168 19.4779 82.1692 19.6145C81.9427 20.861 81.2081 22.5531 80.4092 22.5531C79.6094 22.5531 79.232 21.8457 79.232 18.6124C79.232 16.7262 79.2887 15.9061 79.3165 14.5418C79.3327 13.7561 79.3639 13.1527 79.3621 13.0157C79.3562 12.5958 78.6301 12.3842 78.2922 12.306C77.9528 12.2271 77.6578 12.1965 77.4274 12.2096C77.1014 12.228 76.8707 12.4419 76.8707 12.7361C76.8707 12.8938 76.8725 13.1938 76.8725 13.1938C76.4526 12.5339 75.7772 12.0746 75.3279 11.9415C74.1176 11.5821 72.8546 11.9006 71.902 13.2336C71.1448 14.2928 70.6885 15.4924 70.5088 17.2159C70.3775 18.4759 70.4203 19.7536 70.6537 20.8342C70.3717 22.0535 69.8481 22.5531 69.2748 22.5531C68.4425 22.5531 67.8391 21.1946 67.9091 18.845C67.9554 17.2996 68.2646 16.2151 68.6026 14.6461C68.7467 13.9773 68.6297 13.6271 68.3359 13.2915C68.0666 12.9837 67.4926 12.8265 66.6675 13.0199C66.0797 13.1578 65.2394 13.3061 64.4706 13.42C64.4706 13.42 64.517 13.2349 64.5551 12.9086C64.755 11.1972 62.8954 11.3361 62.3021 11.8827C61.9479 12.209 61.7068 12.5939 61.6153 13.2859C61.4702 14.3841 62.3659 14.9021 62.3659 14.9021C62.072 16.2473 61.3517 18.0045 60.608 19.275C60.2097 19.9557 59.9049 20.4601 59.5116 20.9963C59.5101 20.7966 59.509 20.597 59.5083 20.3983C59.4993 17.5702 59.537 15.3444 59.5536 14.5421C59.5698 13.7564 59.6013 13.1689 59.5995 13.032C59.5951 12.7249 59.4157 12.6089 59.0426 12.462C58.7128 12.3321 58.3228 12.2422 57.9182 12.2109C57.4076 12.1711 57.1 12.4419 57.108 12.7621C57.1095 12.8226 57.1095 13.1939 57.1095 13.1939C56.6896 12.534 56.0142 12.0748 55.5649 11.9417C54.3545 11.5824 53.0916 11.9009 52.139 13.2337C51.382 14.2929 50.8862 15.7792 50.7458 17.2029C50.6149 18.5298 50.6391 19.6574 50.8175 20.6073C50.625 21.5585 50.0717 22.5532 49.446 22.5532C48.6462 22.5532 48.1911 21.8458 48.1911 18.6125C48.1911 16.7263 48.2477 15.9062 48.2756 14.5421C48.2917 13.7564 48.3229 13.1528 48.3211 13.016C48.3153 12.5961 47.5891 12.3845 47.2513 12.3061C46.8977 12.2243 46.5925 12.1943 46.3582 12.2115C46.0489 12.2346 45.8315 12.5115 45.8315 12.718V13.1939C45.4116 12.534 44.7362 12.0748 44.2869 11.9417C43.0766 11.5824 41.8206 11.906 40.861 13.2337C40.2352 14.0995 39.7286 15.0593 39.4678 17.184C39.3925 17.798 39.3592 18.373 39.3635 18.9104C39.1139 20.4365 38.0118 22.1955 37.1102 22.1955C36.5826 22.1955 36.0801 21.1722 36.0801 18.9913C36.0801 16.0863 36.2599 11.9501 36.2903 11.5515C36.2903 11.5515 37.4295 11.5321 37.6501 11.5296C38.2183 11.5233 38.7329 11.5368 39.4897 11.4981C39.8693 11.4787 40.235 10.1164 39.8433 9.9478C39.6657 9.8715 38.4107 9.80463 37.9132 9.79407C37.4949 9.78459 36.3303 9.69841 36.3303 9.69841C36.3303 9.69841 36.4348 6.95301 36.4591 6.663C36.4797 6.42128 36.167 6.29683 35.9877 6.22131C35.5516 6.03687 35.1614 5.94856 34.699 5.85322C34.06 5.72142 33.7702 5.85034 33.7136 6.3896C33.6283 7.20801 33.5841 9.60514 33.5841 9.60514C33.1153 9.60514 31.5137 9.51349 31.0446 9.51349C30.6089 9.51349 30.1386 11.3875 30.741 11.4106C31.4342 11.4374 32.6421 11.4606 33.4429 11.4848C33.4429 11.4848 33.4072 15.6891 33.4072 16.9871C33.4072 17.1252 33.4084 17.2582 33.4087 17.3872C32.9679 19.6844 31.4156 20.9252 31.4156 20.9252C31.749 19.4055 31.068 18.2643 29.8413 17.2983C29.3894 16.9423 28.4973 16.2683 27.4991 15.5298C27.4991 15.5298 28.0772 14.96 28.5899 13.8137C28.9532 13.0016 28.9689 12.0724 28.0772 11.8675C26.6039 11.5286 25.3891 12.6107 25.0267 13.7658C24.746 14.6607 24.8957 15.3247 25.4457 16.0145C25.4859 16.0649 25.5294 16.1164 25.5743 16.1682C25.2417 16.8093 24.7849 17.6723 24.3979 18.3416C23.3239 20.1998 22.5125 21.6696 21.8993 21.6696C21.4092 21.6696 21.4158 20.1773 21.4158 18.7802C21.4158 17.5758 21.5047 15.7649 21.5757 13.8901C21.5992 13.2701 21.2892 12.9169 20.7695 12.5969C20.4537 12.4026 19.7798 12.0204 19.3894 12.0204C18.8052 12.0204 17.1196 12.0999 15.527 16.7069C15.3263 17.2875 14.932 18.3456 14.932 18.3456L14.9659 12.8055C14.9659 12.6756 14.8967 12.5501 14.7383 12.4641C14.4699 12.3184 13.7531 12.0204 13.1157 12.0204C12.8121 12.0204 12.6605 12.1616 12.6605 12.4432L12.6049 21.1106C12.6049 21.7692 12.6221 22.5375 12.6872 22.8735C12.7521 23.2099 12.8572 23.4836 12.9873 23.6465C13.1173 23.809 13.2677 23.933 13.5155 23.9842C13.7462 24.0317 15.0096 24.1939 15.0752 23.7111C15.1539 23.1325 15.1569 22.5067 15.8203 20.1727C16.853 16.539 18.1995 14.7661 18.8325 14.1365C18.9432 14.0264 19.0696 14.0198 19.0635 14.2C19.0364 14.9966 18.9414 16.9873 18.8774 18.6785C18.706 23.2043 19.5293 24.0432 20.7059 24.0432C21.606 24.0432 22.8749 23.1488 24.2351 20.8848C25.0831 19.4739 25.9065 18.0904 26.4981 17.0933C26.9103 17.475 27.3729 17.8857 27.8352 18.3245C28.9096 19.3442 29.2623 20.3131 29.0283 21.2322C28.8493 21.9349 28.1752 22.6591 26.9754 21.9552C26.6257 21.7499 26.4765 21.5912 26.1248 21.3597C25.9359 21.2354 25.6475 21.1982 25.4746 21.3285C25.0254 21.6671 24.7685 22.0979 24.6218 22.6313C24.4791 23.1502 24.9988 23.4246 25.5376 23.6645C26.0015 23.871 26.9986 24.0582 27.6345 24.0795C30.1121 24.1624 32.0968 22.8832 33.4785 19.5837C33.7258 22.4333 34.7784 24.0457 36.6072 24.0457C37.8298 24.0457 39.0556 22.4654 39.5917 20.9107C39.7456 21.5444 39.9734 22.0955 40.2676 22.5615C41.6767 24.7942 44.4104 24.3137 45.7836 22.4178C46.2082 21.8319 46.2728 21.6214 46.2728 21.6214C46.4731 23.4116 47.9147 24.0371 48.7402 24.0371C49.6646 24.0371 50.6192 23.6001 51.2882 22.094C51.3666 22.2574 51.4521 22.4135 51.5456 22.5615C52.9547 24.7942 55.6884 24.3136 57.0616 22.4177C57.1264 22.3288 57.1826 22.2481 57.2317 22.1757L57.272 23.3516C57.272 23.3516 56.4886 24.0702 56.0077 24.5111C53.8913 26.4528 52.2821 27.9259 52.1637 29.6414C52.0117 31.8289 53.7858 32.6418 55.1279 32.7484C56.5532 32.8615 57.7738 32.0741 58.5241 30.9722C59.1839 30.0023 59.6159 27.9149 59.5842 25.8532C59.5715 25.0276 59.5507 23.9779 59.5344 22.8527C60.2783 21.9888 61.1164 20.897 61.8881 19.619C62.729 18.2263 63.6303 16.356 64.0918 14.9004C64.0918 14.9004 64.8748 14.9072 65.7105 14.8524C65.9778 14.835 66.0546 14.8895 66.0052 15.0855C65.9455 15.3223 64.9494 19.1644 65.8585 21.7239C66.4808 23.4761 67.8835 24.0398 68.7152 24.0398C69.6888 24.0398 70.6201 23.3046 71.1192 22.2128C71.1794 22.3345 71.2422 22.4523 71.3109 22.561C72.72 24.7937 75.4442 24.3103 76.8269 22.4172C77.139 21.9901 77.3161 21.6209 77.3161 21.6209C77.6129 23.4737 79.0537 24.046 79.879 24.046C80.7387 24.046 81.5545 23.6936 82.2165 22.1274C82.2441 22.817 82.2876 23.3809 82.3564 23.5586C82.3983 23.6674 82.6426 23.8039 82.8203 23.8698C83.6067 24.1614 84.4088 24.0235 84.7056 23.9635C84.9111 23.9219 85.0714 23.757 85.0933 23.3311C85.1509 22.213 85.1156 20.3343 85.4546 18.938C86.0236 16.5948 86.5543 15.6859 86.8061 15.2359C86.9471 14.9838 87.1061 14.9422 87.1118 15.209C87.1237 15.7489 87.1506 17.3344 87.371 19.4645C87.5329 21.0312 87.7492 21.9572 87.9154 22.2502C88.3897 23.0883 88.9755 23.128 89.4525 23.128C89.756 23.128 90.3906 23.0441 90.3338 22.5108C90.3061 22.2508 90.3546 20.6443 90.9156 18.3358C91.2819 16.8282 91.8927 15.4661 92.113 14.9681C92.1942 14.7844 92.232 14.9292 92.2307 14.9574C92.1843 15.9956 92.0802 19.3914 92.5031 21.2487C93.0764 23.7647 94.735 24.0462 95.313 24.0462C96.5468 24.0462 97.5559 23.1077 97.8958 20.6381C97.9777 20.0438 97.8565 19.5849 97.4932 19.5849"
        fill="#262626"
      />
    </Svg>
  );
}

function Home({ size, fill, ...pops }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 29" fill="none">
      <Path
        d="M10.3095 25.8899H5.5C4.94772 25.8899 4.5 25.4422 4.5 24.8899V16.0831C4.5 15.8284 4.59721 15.5832 4.7718 15.3977L13.8988 5.70032C14.2936 5.2808 14.9603 5.2808 15.3552 5.70032L24.3076 15.2122C24.4822 15.3977 24.5794 15.6429 24.5794 15.8976V24.8899C24.5794 25.4422 24.1317 25.8899 23.5794 25.8899H18.5952C18.043 25.8899 17.5952 25.4422 17.5952 24.8899V19.9534C17.5952 19.9534 17.5952 17.1707 14.627 17.1707C11.1349 17.1707 11.3095 19.9534 11.3095 19.9534V24.8899C11.3095 25.4422 10.8618 25.8899 10.3095 25.8899Z"
        stroke={fill}
        strokeWidth="2"
      />
    </Svg>
  );
}

function HomeFilled({ size, fill, ...pops }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 29">
      <Path
        fill={fill}
        d="M10.7082 25.2713H5.89868C5.3464 25.2713 4.89868 24.8236 4.89868 24.2713V15.4645C4.89868 15.2097 4.9959 14.9646 5.17048 14.7791L14.2975 5.0817C14.6923 4.66218 15.359 4.66218 15.7539 5.0817L24.7062 14.5936C24.8808 14.7791 24.978 15.0242 24.978 15.279V24.2713C24.978 24.8236 24.5303 25.2713 23.978 25.2713H18.9939C18.4416 25.2713 17.9939 24.8236 17.9939 24.2713V19.3348C17.9939 19.3348 17.9939 16.552 15.0257 16.552C11.5336 16.552 11.7082 19.3348 11.7082 19.3348V24.2713C11.7082 24.8236 11.2605 25.2713 10.7082 25.2713Z"
      />
    </Svg>
  );
}

function Search({ size, fill, ...pops }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 29">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1691 12.7612C20.1691 17.0881 16.6615 20.5957 12.3346 20.5957C8.00765 20.5957 4.5 17.0881 4.5 12.7612C4.5 8.43426 8.00765 4.92661 12.3346 4.92661C16.6615 4.92661 20.1691 8.43426 20.1691 12.7612ZM18.5457 20.3865C16.8523 21.7676 14.6901 22.5957 12.3346 22.5957C6.90308 22.5957 2.5 18.1926 2.5 12.7612C2.5 7.32969 6.90308 2.92661 12.3346 2.92661C17.766 2.92661 22.1691 7.32969 22.1691 12.7612C22.1691 15.1167 21.341 17.2789 19.9599 18.9723L25.2434 24.2558C25.634 24.6464 25.634 25.2795 25.2434 25.67C24.8529 26.0606 24.2198 26.0606 23.8292 25.67L18.5457 20.3865Z"
        fill="black"
      />
    </Svg>
  );
}
function SearchFilled({ size, fill, ...pops }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.5714 19.3909C15.3053 19.3909 19.1429 15.5534 19.1429 10.8195C19.1429 6.08561 15.3053 2.24805 10.5714 2.24805C5.83756 2.24805 2 6.08561 2 10.8195C2 15.5534 5.83756 19.3909 10.5714 19.3909Z"
        stroke={fill}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 17.248L22 22.2481"
        stroke={fill}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Reel({ size, fill, ...pops }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 29" fill="none">
      <Rect
        x="4.5"
        y="4.92661"
        width="20"
        height="20"
        rx="6"
        stroke={fill}
        strokeWidth="2"
      />
      <Path
        d="M5.24609 10.0377H12.5794H23.754M18.6905 9.51394L17.4683 7.4187L16.4207 5.67267M12.4048 9.68854L11.1826 7.5933L10.135 5.84727"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <Path
        d="M12.0961 14.6735C12.1137 13.9247 12.918 13.4603 13.5753 13.8195L18.1153 16.3C18.8001 16.6741 18.8116 17.6534 18.1359 18.0436L13.474 20.7351C12.7982 21.1253 11.9559 20.6256 11.9743 19.8455L12.0961 14.6735Z"
        fill={fill}
      />
    </Svg>
  );
}
function ReelFilled({ size, fill, ...pops }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 29">
      <Mask id="path-1-inside-1_671_353">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8984 3.53983H14.6329L14.7068 3.66446L17.0048 7.53885L17.6535 8.65095H13.5813L12.4465 6.70559L10.6317 3.54481C10.7202 3.5415 10.8091 3.53983 10.8984 3.53983ZM4.15625 8.65095C4.76946 6.45758 6.42421 4.69904 8.55365 3.9422L10.7138 7.70444L10.7138 7.70445L10.7173 7.71038L11.2659 8.65095H4.15625ZM3.89844 18.5398V10.651H12.4326L12.4434 10.6694L12.475 10.651H12.9779H25.8984V18.5398C25.8984 22.4058 22.7644 25.5398 18.8984 25.5398H10.8984C7.03244 25.5398 3.89844 22.4058 3.89844 18.5398ZM18.8984 3.53983C22.1099 3.53983 24.8163 5.70252 25.6406 8.65095H19.9689L19.9528 8.62327L18.7305 6.52804L18.7306 6.52802L18.7268 6.52177L16.9582 3.53983H18.8984ZM13.9737 13.4327C13.3164 13.0735 12.5122 13.5379 12.4945 14.2867L12.3727 19.4588C12.3543 20.2388 13.1967 20.7385 13.8724 20.3483L18.5343 17.6568C19.2101 17.2666 19.1985 16.2873 18.5138 15.9132L13.9737 13.4327Z"
        />
      </Mask>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8984 3.53983H14.6329L14.7068 3.66446L17.0048 7.53885L17.6535 8.65095H13.5813L12.4465 6.70559L10.6317 3.54481C10.7202 3.5415 10.8091 3.53983 10.8984 3.53983ZM4.15625 8.65095C4.76946 6.45758 6.42421 4.69904 8.55365 3.9422L10.7138 7.70444L10.7138 7.70445L10.7173 7.71038L11.2659 8.65095H4.15625ZM3.89844 18.5398V10.651H12.4326L12.4434 10.6694L12.475 10.651H12.9779H25.8984V18.5398C25.8984 22.4058 22.7644 25.5398 18.8984 25.5398H10.8984C7.03244 25.5398 3.89844 22.4058 3.89844 18.5398ZM18.8984 3.53983C22.1099 3.53983 24.8163 5.70252 25.6406 8.65095H19.9689L19.9528 8.62327L18.7305 6.52804L18.7306 6.52802L18.7268 6.52177L16.9582 3.53983H18.8984ZM13.9737 13.4327C13.3164 13.0735 12.5122 13.5379 12.4945 14.2867L12.3727 19.4588C12.3543 20.2388 13.1967 20.7385 13.8724 20.3483L18.5343 17.6568C19.2101 17.2666 19.1985 16.2873 18.5138 15.9132L13.9737 13.4327Z"
        fill="black"
      />
      <Path
        d="M14.6329 3.53983L16.3531 2.51955L15.772 1.53983H14.6329V3.53983ZM14.7068 3.66446L12.9866 4.68474V4.68474L14.7068 3.66446ZM17.0048 7.53885L18.7323 6.53111L18.7287 6.52483L18.725 6.51857L17.0048 7.53885ZM17.6535 8.65095V10.651H21.1356L19.3811 7.64321L17.6535 8.65095ZM13.5813 8.65095L11.8538 9.6587L12.4326 10.651H13.5813V8.65095ZM12.4465 6.70559L10.7121 7.70147L10.719 7.71333L12.4465 6.70559ZM10.6317 3.54481L10.5568 1.54622L7.2491 1.67013L8.89728 4.54067L10.6317 3.54481ZM8.55365 3.9422L10.2881 2.94634L9.45685 1.49862L7.88386 2.05769L8.55365 3.9422ZM4.15625 8.65095L2.23011 8.11246L1.52041 10.651H4.15625V8.65095ZM10.7138 7.70444L11.7368 9.42303L13.4286 8.41599L12.4483 6.70858L10.7138 7.70444ZM10.7138 7.70445L9.69083 5.98587L7.98743 6.9998L8.98621 8.71213L10.7138 7.70445ZM10.7173 7.71038L8.98967 8.71806L8.9897 8.71812L10.7173 7.71038ZM11.2659 8.65095V10.651H14.748L12.9935 7.64321L11.2659 8.65095ZM3.89844 10.651V8.65095H1.89844V10.651H3.89844ZM12.4326 10.651L14.1602 9.64324L13.5814 8.65095H12.4326V10.651ZM12.4434 10.6694L10.7158 11.6771L11.7235 13.4047L13.4511 12.397L12.4434 10.6694ZM12.475 10.651V8.65095H11.9343L11.4672 8.9234L12.475 10.651ZM25.8984 10.651H27.8984V8.65095H25.8984V10.651ZM25.6406 8.65095V10.651H28.2765L27.5668 8.11246L25.6406 8.65095ZM19.9689 8.65095L18.2414 9.65873L18.8202 10.651H19.9689V8.65095ZM19.9528 8.62327L18.2252 9.63102L18.2252 9.63105L19.9528 8.62327ZM18.7305 6.52804L17.7228 4.80048L15.9952 5.80822L17.003 7.53578L18.7305 6.52804ZM18.7306 6.52802L19.7383 8.25558L21.4784 7.24052L20.4508 5.50781L18.7306 6.52802ZM18.7268 6.52177L20.4471 5.50156L20.447 5.5015L18.7268 6.52177ZM16.9582 3.53983V1.53983H13.4466L15.238 4.5601L16.9582 3.53983ZM12.4945 14.2867L14.494 14.3338V14.3338L12.4945 14.2867ZM13.9737 13.4327L14.9327 11.6776L14.9327 11.6776L13.9737 13.4327ZM12.3727 19.4588L10.3733 19.4117L12.3727 19.4588ZM13.8724 20.3483L12.8724 18.6163L12.8724 18.6163L13.8724 20.3483ZM18.5343 17.6568L17.5343 15.9247H17.5343L18.5343 17.6568ZM18.5138 15.9132L19.4727 14.1581L18.5138 15.9132ZM14.6329 1.53983H10.8984V5.53983H14.6329V1.53983ZM16.427 2.64419L16.3531 2.51955L12.9127 4.5601L12.9866 4.68474L16.427 2.64419ZM18.725 6.51857L16.427 2.64419L12.9866 4.68474L15.2846 8.55912L18.725 6.51857ZM19.3811 7.64321L18.7323 6.53111L15.2772 8.54659L15.9259 9.6587L19.3811 7.64321ZM13.5813 10.651H17.6535V6.65095H13.5813V10.651ZM10.719 7.71333L11.8538 9.6587L15.3089 7.64321L14.1741 5.69785L10.719 7.71333ZM8.89728 4.54067L10.7121 7.70145L14.181 5.70973L12.3661 2.54895L8.89728 4.54067ZM10.8984 1.53983C10.7842 1.53983 10.6703 1.54197 10.5568 1.54622L10.7066 5.54341C10.7701 5.54103 10.8341 5.53983 10.8984 5.53983V1.53983ZM7.88386 2.05769C5.1454 3.03099 3.01943 5.28912 2.23011 8.11246L6.08239 9.18945C6.51948 7.62604 7.70303 6.36709 9.22344 5.82671L7.88386 2.05769ZM12.4483 6.70858L10.2881 2.94634L6.81922 4.93806L8.97939 8.7003L12.4483 6.70858ZM11.7368 9.42304L11.7368 9.42303L9.69085 5.98586L9.69083 5.98587L11.7368 9.42304ZM12.4449 6.7027L12.4414 6.69677L8.98621 8.71213L8.98967 8.71806L12.4449 6.7027ZM12.9935 7.64321L12.4448 6.70264L8.9897 8.71812L9.53837 9.6587L12.9935 7.64321ZM4.15625 10.651H11.2659V6.65095H4.15625V10.651ZM1.89844 10.651V18.5398H5.89844V10.651H1.89844ZM12.4326 8.65095H3.89844V12.651H12.4326V8.65095ZM14.1709 9.66168L14.1602 9.64324L10.705 11.6587L10.7158 11.6771L14.1709 9.66168ZM11.4672 8.9234L11.4356 8.94185L13.4511 12.397L13.4827 12.3785L11.4672 8.9234ZM12.9779 8.65095H12.475V12.651H12.9779V8.65095ZM25.8984 8.65095H12.9779V12.651H25.8984V8.65095ZM27.8984 18.5398V10.651H23.8984V18.5398H27.8984ZM18.8984 27.5398C23.869 27.5398 27.8984 23.5104 27.8984 18.5398H23.8984C23.8984 21.3012 21.6599 23.5398 18.8984 23.5398V27.5398ZM10.8984 27.5398H18.8984V23.5398H10.8984V27.5398ZM1.89844 18.5398C1.89844 23.5104 5.92787 27.5398 10.8984 27.5398V23.5398C8.13701 23.5398 5.89844 21.3012 5.89844 18.5398H1.89844ZM27.5668 8.11246C26.5072 4.32259 23.0304 1.53983 18.8984 1.53983V5.53983C21.1895 5.53983 23.1254 7.08245 23.7145 9.18945L27.5668 8.11246ZM19.9689 10.651H25.6406V6.65095H19.9689V10.651ZM18.2252 9.63105L18.2414 9.65873L21.6964 7.64318L21.6803 7.6155L18.2252 9.63105ZM17.003 7.53578L18.2252 9.63102L21.6803 7.61553L20.4581 5.52029L17.003 7.53578ZM17.7228 4.80046L17.7228 4.80048L19.7383 8.25559L19.7383 8.25558L17.7228 4.80046ZM17.0066 7.54198L17.0103 7.54823L20.4508 5.50781L20.4471 5.50156L17.0066 7.54198ZM15.238 4.5601L17.0067 7.54204L20.447 5.5015L18.6784 2.51955L15.238 4.5601ZM18.8984 1.53983H16.9582V5.53983H18.8984V1.53983ZM14.494 14.3338C14.4763 15.0826 13.6721 15.5469 13.0148 15.1878L14.9327 11.6776C12.9608 10.6002 10.548 11.9932 10.4951 14.2396L14.494 14.3338ZM14.3722 19.5058L14.494 14.3338L10.4951 14.2396L10.3733 19.4117L14.3722 19.5058ZM12.8724 18.6163C13.5482 18.2261 14.3905 18.7258 14.3722 19.5058L10.3733 19.4117C10.3182 21.7519 12.8452 23.2508 14.8724 22.0804L12.8724 18.6163ZM17.5343 15.9247L12.8724 18.6163L14.8724 22.0804L19.5343 19.3888L17.5343 15.9247ZM17.5548 17.6683C16.8701 17.2942 16.8585 16.3149 17.5343 15.9247L19.5343 19.3888C21.5616 18.2184 21.527 15.2805 19.4727 14.1581L17.5548 17.6683ZM13.0148 15.1878L17.5548 17.6683L19.4727 14.1581L14.9327 11.6776L13.0148 15.1878Z"
        mask="url(#path-1-inside-1_671_353)"
      />
    </Svg>
  );
}


export { Logo, Home, HomeFilled, Search, SearchFilled, Reel, ReelFilled };
