<script setup lang="ts">
import { getClock } from '@/hooks/time'
import {ref, onMounted, Ref} from 'vue'
// import {WebSocket} from "vite";
let time = ref('');
setInterval(() => { time.value = getClock() }, 1000)
const data: Ref<string | null> = ref(null);
let webSocket: WebSocket | null = null;
const markText = ref('')

const objList = [
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false, //v
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false, //v
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 67,
    "mDispName": "1013G", //v 需要显示在前端的
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [ //暂不需要
      {
        x: 342,
        y: 521
      },
      {
        x: 406,
        y: 521
      },
      {
        x: 342,
        y: 527
      },
      {
        x: 406,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 66,
      x: 341,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 0,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": { //标记窗1左上角和右下角坐标
      left: 0
    },
    "mMarkRect2": { //标记窗2左上角和右下角坐标，当有此属性时，需与MarkRect1同时绘制
      left: 0
    },
    "mName": "1013G", //软件给的名字，不会重复
    "mName1Rect": {
      left: 361,
      top: 528
    },
    "mName1pos": { //上位机显示名称左上角坐标1
      x: 361,
      y: 528
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {  //上位机显示名称位置2，当有此属性时，需与Name1Pos同时绘制
      x: 0,
      y: 0
    },
    "mPointArray": [ //poss
      {
        x: 341,
        y: 524
      },
      {
        x: 407,
        y: 524
      }
    ],
    "mPointArray2": [], //区段不连续时，另一段的坐标
    "mRelayCount": -1, //暂不处理
    "mStatusIndex": 136, //暂不处理
    "mThroat": 0, //暂不处理
    "parseUtil": {},  //暂不处理
    "qFCount": 0, //暂不处理
    "qFCountB": 0,  //暂不处理
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false, //v
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false, //v
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 68,
    "mDispName": "1032G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 346,
        y: 592
      },
      {
        x: 410,
        y: 592
      },
      {
        x: 346,
        y: 598
      },
      {
        x: 410,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 66,
      x: 345,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 1,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "1032G",
    "mName1Rect": {
      left: 363,
      top: 575
    },
    "mName1pos": {
      x: 363,
      y: 575
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 345,
        y: 595
      },
      {
        x: 411,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 137,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "mAttri": -1,
    "mBFlash": false,
    "mBKDUsuValue": false,
    "mBLastDS": false,
    "mBLastFB": false,
    "mBMouseMove": false,
    "mBOnlySWJ": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBRelayValue": false,
    "mBShow": true,
    "mBShowName": false,
    "mBTGQUP": false,
    "mBitmapPos": {
      x: 653,
      y: 584
    },
    "mBitmapRect": {},
    "mCmdIndex": 0,
    "mDefaultBitmap": {},
    "mDispName": "",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mHaveKDUSU": false,
    "mHint": "",
    "mIndex": 2,
    "mLastErrCodeWJJC": 0,
    "mName": "3_5WGtwd",
    "mNameColor": 12632256,
    "mNamePos": {
      x: -500,
      y: -500
    },
    "mNameRect": {},
    "mRelayNum": 40,
    "mRelayS": -1,
    "mShowBitmapIndex": 0,
    "mSwitchName": "",
    "mTGQAdjacentName": "",
    "mThroat": 0,
    "mUSUDefaultBitmap": {},
    "mUSUGDDefaultBitmap": {},
    "qFCount": 0,
    "qFCountB": 0
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 70,
    "mDispName": "3/5WG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 592,
        y: 592
      },
      {
        x: 723,
        y: 592
      },
      {
        x: 592,
        y: 598
      },
      {
        x: 723,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 133,
      x: 591,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 3,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "3_5WG",
    "mName1Rect": {
      left: 636,
      top: 576
    },
    "mName1pos": {
      x: 636,
      y: 576
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 591,
        y: 595
      },
      {
        x: 724,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 142,
    "mThroat": 0,
    "mTwd": {
      "$ref": "$.mDoc.mDynamicObjList[2]"
    },
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "mAttri": -1,
    "mBFlash": false,
    "mBKDUsuValue": false,
    "mBLastDS": false,
    "mBLastFB": false,
    "mBMouseMove": false,
    "mBOnlySWJ": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBRelayValue": false,
    "mBShow": true,
    "mBShowName": false,
    "mBTGQUP": false,
    "mBitmapPos": {
      x: 655,
      y: 511
    },
    "mBitmapRect": {},
    "mCmdIndex": 0,
    "mDefaultBitmap": {},
    "mDispName": "",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mHaveKDUSU": false,
    "mHint": "",
    "mIndex": 4,
    "mLastErrCodeWJJC": 0,
    "mName": "1_11WGtwd",
    "mNameColor": 12632256,
    "mNamePos": {
      x: -500,
      y: -500
    },
    "mNameRect": {},
    "mRelayNum": 40,
    "mRelayS": -1,
    "mShowBitmapIndex": 0,
    "mSwitchName": "",
    "mTGQAdjacentName": "",
    "mThroat": 0,
    "mUSUDefaultBitmap": {},
    "mUSUGDDefaultBitmap": {},
    "qFCount": 0,
    "qFCountB": 0
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 71,
    "mDispName": "1/11WG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 595,
        y: 521
      },
      {
        x: 723,
        y: 521
      },
      {
        x: 595,
        y: 527
      },
      {
        x: 723,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 130,
      x: 594,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 5,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "1_11WG",
    "mName1Rect": {
      left: 628,
      top: 507
    },
    "mName1pos": {
      x: 628,
      y: 507
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 594,
        y: 524
      },
      {
        x: 724,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 143,
    "mThroat": 0,
    "mTwd": {
      "$ref": "$.mDoc.mDynamicObjList[4]"
    },
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 73,
    "mDispName": "IAG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 471,
        y: 521
      },
      {
        x: 506,
        y: 521
      },
      {
        x: 471,
        y: 527
      },
      {
        x: 506,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 37,
      x: 470,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 6,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "IAG",
    "mName1Rect": {
      left: 477,
      top: 529
    },
    "mName1pos": {
      x: 477,
      y: 529
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 470,
        y: 524
      },
      {
        x: 507,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 148,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "mAttri": -1,
    "mBFlash": false,
    "mBKDUsuValue": false,
    "mBLastDS": false,
    "mBLastFB": false,
    "mBMouseMove": false,
    "mBOnlySWJ": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBRelayValue": false,
    "mBShow": true,
    "mBShowName": false,
    "mBTGQUP": false,
    "mBitmapPos": {
      x: 1101,
      y: 496
    },
    "mBitmapRect": {},
    "mCmdIndex": 0,
    "mDefaultBitmap": {},
    "mDispName": "",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mHaveKDUSU": false,
    "mHint": "",
    "mIndex": 7,
    "mLastErrCodeWJJC": 0,
    "mName": "IGtwd",
    "mNameColor": 12632256,
    "mNamePos": {
      x: -500,
      y: -500
    },
    "mNameRect": {},
    "mRelayNum": 40,
    "mRelayS": -1,
    "mShowBitmapIndex": 0,
    "mSwitchName": "",
    "mTGQAdjacentName": "",
    "mThroat": 0,
    "mUSUDefaultBitmap": {},
    "mUSUGDDefaultBitmap": {},
    "qFCount": 0,
    "qFCountB": 0
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": true,
    "mBLastError": false,
    "mBLongMark": true,
    "mBMouseMove": false,
    "mBNoSGJS": true,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 0,
    "mDispName": "IG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 913,
        y: 521
      },
      {
        x: 1194,
        y: 521
      },
      {
        x: 913,
        y: 527
      },
      {
        x: 1194,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 283,
      x: 912,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 8,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 532,
      left: 1022,
      right: 1108,
      top: 516
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "IG",
    "mName1Rect": {
      left: 1053,
      top: 501
    },
    "mName1pos": {
      x: 1053,
      y: 501
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 912,
        y: 524
      },
      {
        x: 1195,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 149,
    "mThroat": 0,
    "mTwd": {
      "$ref": "$.mDoc.mDynamicObjList[7]"
    },
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "mAttri": -1,
    "mBFlash": false,
    "mBKDUsuValue": false,
    "mBLastDS": false,
    "mBLastFB": false,
    "mBMouseMove": false,
    "mBOnlySWJ": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBRelayValue": false,
    "mBShow": true,
    "mBShowName": false,
    "mBTGQUP": false,
    "mBitmapPos": {
      x: 1096,
      y: 636
    },
    "mBitmapRect": {},
    "mCmdIndex": 0,
    "mDefaultBitmap": {},
    "mDispName": "",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mHaveKDUSU": false,
    "mHint": "",
    "mIndex": 9,
    "mLastErrCodeWJJC": 0,
    "mName": "IVGtwd",
    "mNameColor": 12632256,
    "mNamePos": {
      x: -500,
      y: -500
    },
    "mNameRect": {},
    "mRelayNum": 40,
    "mRelayS": -1,
    "mShowBitmapIndex": 0,
    "mSwitchName": "",
    "mTGQAdjacentName": "",
    "mThroat": 0,
    "mUSUDefaultBitmap": {},
    "mUSUGDDefaultBitmap": {},
    "qFCount": 0,
    "qFCountB": 0
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": true,
    "mBLastError": false,
    "mBLongMark": true,
    "mBMouseMove": false,
    "mBNoSGJS": true,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 0,
    "mDispName": "IVG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 905,
        y: 666
      },
      {
        x: 1209,
        y: 666
      },
      {
        x: 905,
        y: 672
      },
      {
        x: 1209,
        y: 672
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 672,
      "width": 306,
      x: 904,
      y: 666
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 10,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 677,
      left: 1019,
      right: 1105,
      top: 661
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "IVG",
    "mName1Rect": {
      left: 1052,
      top: 646
    },
    "mName1pos": {
      x: 1052,
      y: 646
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 904,
        y: 669
      },
      {
        x: 1210,
        y: 669
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 150,
    "mThroat": 0,
    "mTwd": {
      "$ref": "$.mDoc.mDynamicObjList[9]"
    },
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 75,
    "mDispName": "1079G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1448,
        y: 666
      },
      {
        x: 1491,
        y: 666
      },
      {
        x: 1448,
        y: 672
      },
      {
        x: 1491,
        y: 672
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 672,
      "width": 45,
      x: 1447,
      y: 666
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 11,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "XA2LQ",
    "mName1Rect": {
      left: 1456,
      top: 677
    },
    "mName1pos": {
      x: 1456,
      y: 677
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1447,
        y: 669
      },
      {
        x: 1492,
        y: 669
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 155,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 76,
    "mDispName": "IBG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1462,
        y: 521
      },
      {
        x: 1519,
        y: 521
      },
      {
        x: 1462,
        y: 527
      },
      {
        x: 1519,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 59,
      x: 1461,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 12,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "IBG",
    "mName1Rect": {
      left: 1475,
      top: 529
    },
    "mName1pos": {
      x: 1475,
      y: 529
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1461,
        y: 524
      },
      {
        x: 1520,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 156,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 78,
    "mDispName": "1085G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1582,
        y: 521
      },
      {
        x: 1628,
        y: 521
      },
      {
        x: 1582,
        y: 527
      },
      {
        x: 1628,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 48,
      x: 1581,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 13,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "X2LQ",
    "mName1Rect": {
      left: 1594,
      top: 533
    },
    "mName1pos": {
      x: 1594,
      y: 533
    },
    fontSize: 14,
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1581,
        y: 524
      },
      {
        x: 1629,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 161,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 79,
    "mDispName": "1105G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1630,
        y: 521
      },
      {
        x: 1679,
        y: 521
      },
      {
        x: 1630,
        y: 527
      },
      {
        x: 1679,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 51,
      x: 1629,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 14,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "X3LQ",
    "mName1Rect": {
      left: 1639,
      top: 533
    },
    "mName1pos": {
      x: 1639,
      y: 533
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1629,
        y: 524
      },
      {
        x: 1680,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 162,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 81,
    "mDispName": "1114G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1582,
        y: 592
      },
      {
        x: 1635,
        y: 592
      },
      {
        x: 1582,
        y: 598
      },
      {
        x: 1635,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 55,
      x: 1581,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 15,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "S6JG",
    "mName1Rect": {
      left: 1601,
      top: 574
    },
    "mName1pos": {
      x: 1601,
      y: 574
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1581,
        y: 595
      },
      {
        x: 1636,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 167,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 82,
    "mDispName": "1134G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1637,
        y: 592
      },
      {
        x: 1685,
        y: 592
      },
      {
        x: 1637,
        y: 598
      },
      {
        x: 1685,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 50,
      x: 1636,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 16,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "S5JG",
    "mName1Rect": {
      left: 1653,
      top: 574
    },
    "mName1pos": {
      x: 1653,
      y: 574
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1636,
        y: 595
      },
      {
        x: 1686,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 168,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 83,
    "mDispName": "1189G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1493,
        y: 666
      },
      {
        x: 1538,
        y: 666
      },
      {
        x: 1493,
        y: 672
      },
      {
        x: 1538,
        y: 672
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 672,
      "width": 47,
      x: 1492,
      y: 666
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 17,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 677,
      left: 1503,
      right: 1533,
      top: 661
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "XA3LQ",
    "mName1Rect": {
      left: 1504,
      top: 677
    },
    "mName1pos": {
      x: 1504,
      y: 677
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1492,
        y: 669
      },
      {
        x: 1539,
        y: 669
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 169,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "mAttri": -1,
    "mBFlash": false,
    "mBKDUsuValue": false,
    "mBLastDS": false,
    "mBLastFB": false,
    "mBMouseMove": false,
    "mBOnlySWJ": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBRelayValue": false,
    "mBShow": true,
    "mBShowName": false,
    "mBTGQUP": false,
    "mBitmapPos": {
      x: 1099,
      y: 778
    },
    "mBitmapRect": {},
    "mCmdIndex": 0,
    "mDefaultBitmap": {},
    "mDispName": "",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mHaveKDUSU": false,
    "mHint": "",
    "mIndex": 18,
    "mLastErrCodeWJJC": 0,
    "mName": "8Gtwd",
    "mNameColor": 12632256,
    "mNamePos": {
      x: -500,
      y: -500
    },
    "mNameRect": {},
    "mRelayNum": 40,
    "mRelayS": -1,
    "mShowBitmapIndex": 0,
    "mSwitchName": "",
    "mTGQAdjacentName": "",
    "mThroat": 0,
    "mUSUDefaultBitmap": {},
    "mUSUGDDefaultBitmap": {},
    "qFCount": 0,
    "qFCountB": 0
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": true,
    "mBLastError": false,
    "mBLongMark": true,
    "mBMouseMove": false,
    "mBNoSGJS": true,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 0,
    "mDispName": "8G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 945,
        y: 808
      },
      {
        x: 1174,
        y: 808
      },
      {
        x: 945,
        y: 814
      },
      {
        x: 1174,
        y: 814
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 814,
      "width": 231,
      x: 944,
      y: 808
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 19,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 819,
      left: 1018,
      right: 1104,
      top: 803
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "8G",
    "mName1Rect": {
      left: 1051,
      top: 789
    },
    "mName1pos": {
      x: 1051,
      y: 789
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 944,
        y: 811
      },
      {
        x: 1175,
        y: 811
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 174,
    "mThroat": 0,
    "mTwd": {
      "$ref": "$.mDoc.mDynamicObjList[18]"
    },
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "mAttri": -1,
    "mBFlash": false,
    "mBKDUsuValue": false,
    "mBLastDS": false,
    "mBLastFB": false,
    "mBMouseMove": false,
    "mBOnlySWJ": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBRelayValue": false,
    "mBShow": true,
    "mBShowName": false,
    "mBTGQUP": false,
    "mBitmapPos": {
      x: 1099,
      y: 706
    },
    "mBitmapRect": {},
    "mCmdIndex": 0,
    "mDefaultBitmap": {},
    "mDispName": "",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mHaveKDUSU": false,
    "mHint": "",
    "mIndex": 20,
    "mLastErrCodeWJJC": 0,
    "mName": "VIGtwd",
    "mNameColor": 12632256,
    "mNamePos": {
      x: -500,
      y: -500
    },
    "mNameRect": {},
    "mRelayNum": 40,
    "mRelayS": -1,
    "mShowBitmapIndex": 0,
    "mSwitchName": "",
    "mTGQAdjacentName": "",
    "mThroat": 0,
    "mUSUDefaultBitmap": {},
    "mUSUGDDefaultBitmap": {},
    "qFCount": 0,
    "qFCountB": 0
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": true,
    "mBLastError": false,
    "mBLongMark": true,
    "mBMouseMove": false,
    "mBNoSGJS": true,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 0,
    "mDispName": "VIG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 928,
        y: 734
      },
      {
        x: 1193,
        y: 734
      },
      {
        x: 928,
        y: 740
      },
      {
        x: 1193,
        y: 740
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 740,
      "width": 267,
      x: 927,
      y: 734
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 21,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 745,
      left: 1018,
      right: 1104,
      top: 729
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "VIG",
    "mName1Rect": {
      left: 1050,
      top: 714
    },
    "mName1pos": {
      x: 1050,
      y: 714
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 927,
        y: 737
      },
      {
        x: 1194,
        y: 737
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 175,
    "mThroat": 0,
    "mTwd": {
      "$ref": "$.mDoc.mDynamicObjList[20]"
    },
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 87,
    "mDispName": "951G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 78,
        y: 521
      },
      {
        x: 121,
        y: 521
      },
      {
        x: 78,
        y: 527
      },
      {
        x: 121,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 45,
      x: 77,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 22,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "XW2JG",
    "mName1Rect": {
      left: 80,
      top: 532
    },
    "mName1pos": {
      x: 80,
      y: 532
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 77,
        y: 524
      },
      {
        x: 122,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 184,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 88,
    "mDispName": "931G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 33,
        y: 521
      },
      {
        x: 76,
        y: 521
      },
      {
        x: 33,
        y: 527
      },
      {
        x: 76,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 45,
      x: 32,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 23,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 532,
      left: 36,
      right: 66,
      top: 516
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "XW1JG",
    "mName1Rect": {
      left: 34,
      top: 532
    },
    "mName1pos": {
      x: 34,
      y: 532
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 32,
        y: 524
      },
      {
        x: 77,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 185,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 91,
    "mDispName": "980G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 74,
        y: 592
      },
      {
        x: 113,
        y: 592
      },
      {
        x: 74,
        y: 598
      },
      {
        x: 113,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 41,
      x: 73,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 24,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "SW2LQ",
    "mName1Rect": {
      left: 77,
      top: 575
    },
    "mName1pos": {
      x: 77,
      y: 575
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 73,
        y: 595
      },
      {
        x: 114,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 194,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 92,
    "mDispName": "960G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 34,
        y: 592
      },
      {
        x: 72,
        y: 592
      },
      {
        x: 34,
        y: 598
      },
      {
        x: 72,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 40,
      x: 33,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 25,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 603,
      left: 37,
      right: 67,
      top: 587
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "SW3LQ",
    "mName1Rect": {
      left: 35,
      top: 574
    },
    "mName1pos": {
      x: 35,
      y: 574
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 33,
        y: 595
      },
      {
        x: 73,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 195,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 93,
    "mDispName": "1125G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1681,
        y: 521
      },
      {
        x: 1738,
        y: 521
      },
      {
        x: 1681,
        y: 527
      },
      {
        x: 1738,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 59,
      x: 1680,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 26,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "X4LQ",
    "mName1Rect": {
      left: 1691,
      top: 533
    },
    "mName1pos": {
      x: 1691,
      y: 533
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1680,
        y: 524
      },
      {
        x: 1739,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 196,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 94,
    "mDispName": "1145G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1740,
        y: 521
      },
      {
        x: 1795,
        y: 521
      },
      {
        x: 1740,
        y: 527
      },
      {
        x: 1795,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 57,
      x: 1739,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 27,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "X5LQ",
    "mName1Rect": {
      left: 1752,
      top: 532
    },
    "mName1pos": {
      x: 1752,
      y: 532
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1739,
        y: 524
      },
      {
        x: 1796,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 197,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 95,
    "mDispName": "1165G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1797,
        y: 521
      },
      {
        x: 1840,
        y: 521
      },
      {
        x: 1797,
        y: 527
      },
      {
        x: 1840,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 45,
      x: 1796,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 28,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "X6LQ",
    "mName1Rect": {
      left: 1806,
      top: 530
    },
    "mName1pos": {
      x: 1806,
      y: 530
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1796,
        y: 524
      },
      {
        x: 1841,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 198,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 96,
    "mDispName": "1185G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1842,
        y: 521
      },
      {
        x: 1878,
        y: 521
      },
      {
        x: 1842,
        y: 527
      },
      {
        x: 1878,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 38,
      x: 1841,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 29,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 532,
      left: 1847,
      right: 1877,
      top: 516
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "X7LQ",
    "mName1Rect": {
      left: 1848,
      top: 533
    },
    "mName1pos": {
      x: 1848,
      y: 533
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1841,
        y: 524
      },
      {
        x: 1879,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 199,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 97,
    "mDispName": "1154G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1687,
        y: 592
      },
      {
        x: 1744,
        y: 592
      },
      {
        x: 1687,
        y: 598
      },
      {
        x: 1744,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 59,
      x: 1686,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 30,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "S4JG",
    "mName1Rect": {
      left: 1706,
      top: 575
    },
    "mName1pos": {
      x: 1706,
      y: 575
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1686,
        y: 595
      },
      {
        x: 1745,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 200,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 98,
    "mDispName": "1174G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1746,
        y: 592
      },
      {
        x: 1795,
        y: 592
      },
      {
        x: 1746,
        y: 598
      },
      {
        x: 1795,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 51,
      x: 1745,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 31,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "S3JG",
    "mName1Rect": {
      left: 1759,
      top: 575
    },
    "mName1pos": {
      x: 1759,
      y: 575
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1745,
        y: 595
      },
      {
        x: 1796,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 201,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 99,
    "mDispName": "1194G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1797,
        y: 592
      },
      {
        x: 1843,
        y: 592
      },
      {
        x: 1797,
        y: 598
      },
      {
        x: 1843,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 48,
      x: 1796,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 32,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "S2JG",
    "mName1Rect": {
      left: 1800,
      top: 575
    },
    "mName1pos": {
      x: 1800,
      y: 575
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1796,
        y: 595
      },
      {
        x: 1844,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 202,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 100,
    "mDispName": "1214G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1845,
        y: 592
      },
      {
        x: 1884,
        y: 592
      },
      {
        x: 1845,
        y: 598
      },
      {
        x: 1884,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 41,
      x: 1844,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 33,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 603,
      left: 1851,
      right: 1881,
      top: 587
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "S1JG",
    "mName1Rect": {
      left: 1852,
      top: 572
    },
    "mName1pos": {
      x: 1852,
      y: 572
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1844,
        y: 595
      },
      {
        x: 1885,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 203,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 101,
    "mDispName": "SJ1LQG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1466,
        y: 734
      },
      {
        x: 1520,
        y: 734
      },
      {
        x: 1466,
        y: 740
      },
      {
        x: 1520,
        y: 740
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 740,
      "width": 56,
      x: 1465,
      y: 734
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 34,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 745,
      left: 1478,
      right: 1508,
      top: 729
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "SA1JG",
    "mName1Rect": {
      left: 1476,
      top: 716
    },
    "mName1pos": {
      x: 1476,
      y: 716
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1465,
        y: 737
      },
      {
        x: 1521,
        y: 737
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 204,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": true,
    "mBLastError": false,
    "mBLongMark": true,
    "mBMouseMove": false,
    "mBNoSGJS": true,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 0,
    "mDispName": "WIG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 166,
        y: 521
      },
      {
        x: 279,
        y: 521
      },
      {
        x: 166,
        y: 527
      },
      {
        x: 279,
        y: 527
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 527,
      "width": 115,
      x: 165,
      y: 521
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 35,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 532,
      left: 182,
      right: 268,
      top: 516
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "WIG",
    "mName1Rect": {
      left: 209,
      top: 545
    },
    "mName1pos": {
      x: 209,
      y: 545
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 165,
        y: 524
      },
      {
        x: 280,
        y: 524
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 205,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": true,
    "mBLastError": false,
    "mBLongMark": true,
    "mBMouseMove": false,
    "mBNoSGJS": true,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 0,
    "mDispName": "WIIG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 177,
        y: 592
      },
      {
        x: 291,
        y: 592
      },
      {
        x: 177,
        y: 598
      },
      {
        x: 291,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 116,
      x: 176,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 36,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 603,
      left: 186,
      right: 272,
      top: 587
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "WIIG",
    "mName1Rect": {
      left: 219,
      top: 575
    },
    "mName1pos": {
      x: 219,
      y: 575
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 176,
        y: 595
      },
      {
        x: 292,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 206,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 105,
    "mDispName": "1037G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 641,
        y: 377
      },
      {
        x: 696,
        y: 377
      },
      {
        x: 641,
        y: 383
      },
      {
        x: 696,
        y: 383
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 383,
      "width": 57,
      x: 640,
      y: 377
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 38,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "XD2JG",
    "mName1Rect": {
      left: 652,
      top: 389
    },
    "mName1pos": {
      x: 652,
      y: 389
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 640,
        y: 380
      },
      {
        x: 697,
        y: 380
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 208,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 107,
    "mDispName": "5AG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 940,
        y: 377
      },
      {
        x: 1045,
        y: 377
      },
      {
        x: 940,
        y: 383
      },
      {
        x: 1045,
        y: 383
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 383,
      "width": 107,
      x: 939,
      y: 377
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 39,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "5AG",
    "mName1Rect": {
      left: 972,
      top: 360
    },
    "mName1pos": {
      x: 972,
      y: 360
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 939,
        y: 380
      },
      {
        x: 1046,
        y: 380
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 213,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 108,
    "mDispName": "5BG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1047,
        y: 377
      },
      {
        x: 1151,
        y: 377
      },
      {
        x: 1047,
        y: 383
      },
      {
        x: 1151,
        y: 383
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 383,
      "width": 106,
      x: 1046,
      y: 377
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 40,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "5BG",
    "mName1Rect": {
      left: 1113,
      top: 364
    },
    "mName1pos": {
      x: 1113,
      y: 364
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1046,
        y: 380
      },
      {
        x: 1152,
        y: 380
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 214,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 109,
    "mDispName": "XDAG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 750,
        y: 377
      },
      {
        x: 804,
        y: 377
      },
      {
        x: 750,
        y: 383
      },
      {
        x: 804,
        y: 383
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 383,
      "width": 56,
      x: 749,
      y: 377
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 41,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "XDAG",
    "mName1Rect": {
      left: 771,
      top: 388
    },
    "mName1pos": {
      x: 771,
      y: 388
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 749,
        y: 380
      },
      {
        x: 805,
        y: 380
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 215,
    "mThroat": 0,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 110,
    "mDispName": "XDBG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1153,
        y: 377
      },
      {
        x: 1262,
        y: 377
      },
      {
        x: 1153,
        y: 383
      },
      {
        x: 1262,
        y: 383
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 383,
      "width": 111,
      x: 1152,
      y: 377
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 42,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "XDBG",
    "mName1Rect": {
      left: 1186,
      top: 385
    },
    "mName1pos": {
      x: 1186,
      y: 385
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1152,
        y: 380
      },
      {
        x: 1263,
        y: 380
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 216,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "mAttri": -1,
    "mBFlash": false,
    "mBKDUsuValue": false,
    "mBLastDS": false,
    "mBLastFB": false,
    "mBMouseMove": false,
    "mBOnlySWJ": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBRelayValue": false,
    "mBShow": true,
    "mBShowName": false,
    "mBTGQUP": false,
    "mBitmapPos": {
      x: 1100,
      y: 426
    },
    "mBitmapRect": {},
    "mCmdIndex": 0,
    "mDefaultBitmap": {},
    "mDispName": "",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mHaveKDUSU": false,
    "mHint": "",
    "mIndex": 43,
    "mLastErrCodeWJJC": 0,
    "mName": "3Gtwd",
    "mNameColor": 12632256,
    "mNamePos": {
      x: -500,
      y: -500
    },
    "mNameRect": {},
    "mRelayNum": 40,
    "mRelayS": -1,
    "mShowBitmapIndex": 0,
    "mSwitchName": "",
    "mTGQAdjacentName": "",
    "mThroat": 0,
    "mUSUDefaultBitmap": {},
    "mUSUGDDefaultBitmap": {},
    "qFCount": 0,
    "qFCountB": 0
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": true,
    "mBLastError": false,
    "mBLongMark": true,
    "mBMouseMove": false,
    "mBNoSGJS": true,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 0,
    "mDispName": "3G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 933,
        y: 451
      },
      {
        x: 1192,
        y: 451
      },
      {
        x: 933,
        y: 457
      },
      {
        x: 1192,
        y: 457
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 457,
      "width": 261,
      x: 932,
      y: 451
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 44,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 462,
      left: 1025,
      right: 1111,
      top: 446
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "3G",
    "mName1Rect": {
      left: 1059,
      top: 431
    },
    "mName1pos": {
      x: 1059,
      y: 431
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 932,
        y: 454
      },
      {
        x: 1193,
        y: 454
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 217,
    "mThroat": 0,
    "mTwd": {
      "$ref": "$.mDoc.mDynamicObjList[43]"
    },
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 111,
    "mDispName": "1088G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1405,
        y: 734
      },
      {
        x: 1464,
        y: 734
      },
      {
        x: 1405,
        y: 740
      },
      {
        x: 1464,
        y: 740
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 740,
      "width": 61,
      x: 1404,
      y: 734
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 45,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "SA2JG",
    "mName1Rect": {
      left: 1419,
      top: 715
    },
    "mName1pos": {
      x: 1419,
      y: 715
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1404,
        y: 737
      },
      {
        x: 1465,
        y: 737
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 218,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": false,
    "mBLastError": false,
    "mBLongMark": false,
    "mBMouseMove": false,
    "mBNoSGJS": true,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": false,
    "mCmdIndex": 0,
    "mDispName": "D4G",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 1264,
        y: 377
      },
      {
        x: 1345,
        y: 377
      },
      {
        x: 1264,
        y: 383
      },
      {
        x: 1345,
        y: 383
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 383,
      "width": 83,
      x: 1263,
      y: 377
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 46,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      left: 0
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "D4G",
    "mName1Rect": {
      left: 1295,
      top: 363
    },
    "mName1pos": {
      x: 1295,
      y: 363
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 1263,
        y: 380
      },
      {
        x: 1346,
        y: 380
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 219,
    "mThroat": 1,
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  },
  {
    "mAttri": -1,
    "mBFlash": false,
    "mBKDUsuValue": false,
    "mBLastDS": false,
    "mBLastFB": false,
    "mBMouseMove": false,
    "mBOnlySWJ": false,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBRelayValue": false,
    "mBShow": true,
    "mBShowName": false,
    "mBTGQUP": false,
    "mBitmapPos": {
      x: 1099,
      y: 566
    },
    "mBitmapRect": {},
    "mCmdIndex": 0,
    "mDefaultBitmap": {},
    "mDispName": "",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mHaveKDUSU": false,
    "mHint": "",
    "mIndex": 47,
    "mLastErrCodeWJJC": 0,
    "mName": "IIGtwd",
    "mNameColor": 12632256,
    "mNamePos": {
      x: -500,
      y: -500
    },
    "mNameRect": {},
    "mRelayNum": 40,
    "mRelayS": -1,
    "mShowBitmapIndex": 0,
    "mSwitchName": "",
    "mTGQAdjacentName": "",
    "mThroat": 0,
    "mUSUDefaultBitmap": {},
    "mUSUGDDefaultBitmap": {},
    "qFCount": 0,
    "qFCountB": 0
  },
  {
    "dgupindex": -1,
    "iDGJI": 32,
    "iDSJ": 64,
    "iD_FB": 512,
    "iD_QJJ": 128,
    "iD_Y180": 256,
    "mB180S": false,
    "mBError": false,
    "mBFlash": false,
    "mBGJI": false,
    "mBIsTrack": true,
    "mBLastError": false,
    "mBLongMark": true,
    "mBMouseMove": false,
    "mBNoSGJS": true,
    "mBOutScreen": false,
    "mBPaint": true,
    "mBQJJ": true,
    "mBSJ": true,
    "mBShowMark": true,
    "mCmdIndex": 0,
    "mDispName": "IIG",
    "mDoc": {
      "$ref": "$.mDoc"
    },
    "mErrCode": 0,
    "mErrType": "轨道",
    "mFLBLArray": [
      {
        x: 898,
        y: 592
      },
      {
        x: 1204,
        y: 592
      },
      {
        x: 898,
        y: 598
      },
      {
        x: 1204,
        y: 598
      }
    ],
    "mFLBLArray2": [],
    "mHint": "",
    "mHitRect": {
      "height": 598,
      "width": 308,
      x: 897,
      y: 592
    },
    "mHitRect2": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mIndex": 48,
    "mLSData": 7,
    "mLastErrCodeWJJC": 0,
    "mLastMark": "",
    "mLastRect1": {
      left: 0
    },
    "mLastRect2": {
      left: 0
    },
    "mMark": "",
    "mMarkColor": 0,
    "mMarkRect": {
      bottom: 603,
      left: 1021,
      right: 1107,
      top: 587
    },
    "mMarkRect2": {
      left: 0
    },
    "mName": "IIG",
    "mName1Rect": {
      left: 1045,
      top: 573
    },
    "mName1pos": {
      x: 1045,
      y: 573
    },
    "mName2Rect": {
      bottom: -1,
      left: -1,
      right: -1,
      top: -1
    },
    "mName2pos": {
      x: 0,
      y: 0
    },
    "mPointArray": [
      {
        x: 897,
        y: 595
      },
      {
        x: 1205,
        y: 595
      }
    ],
    "mPointArray2": [],
    "mRelayCount": -1,
    "mStatusIndex": 220,
    "mThroat": 0,
    "mTwd": {
      "$ref": "$.mDoc.mDynamicObjList[47]"
    },
    "parseUtil": {},
    "qFCount": 0,
    "qFCountB": 0,
    "signName": "区段"
  }
]

onMounted( () => {

  webSocket = new WebSocket('ws://172.20.10.3:8090/server')
  // 检查WebSocket的状态
  function checkWebSocketState() {
    switch (webSocket.readyState) {
      case WebSocket.CONNECTING:
        console.log('连接正在建立中...');
        break;
      case WebSocket.OPEN:
        console.log('连接已开启并准备好通信。');
        break;
      case WebSocket.CLOSING:
        console.log('连接正在关闭中...');
        break;
      case WebSocket.CLOSED:
        console.log('连接已关闭或无法打开。');
        break;
      default:
        console.log('未知的WebSocket状态:', webSocket.readyState);
    }
  }

// 可以在需要的时候调用checkWebSocketState函数，例如在WebSocket事件回调中
  webSocket.onopen = function(event) {
    checkWebSocketState(); // 应该会打印 "连接已开启并准备好通信。"
  };

  webSocket.onclose = function(event) {
    checkWebSocketState(); // 应该会打印 "连接已关闭或无法打开。"
  };

// 也可以在任何时候手动检查状态
  checkWebSocketState(); // 在连接刚创建时调用，可能会打印 "连接正在建立中..."

  webSocket.onmessage = (event) => {
    // 处理接收到的消息
    console.log(event.data)
  };

  webSocket.onopen = () => {
    console.log('websocket')
    console.log('WebSocket连接已打开');
    // 连接打开后发送消息
    webSocket.send('发送数据123123123');
  };

  webSocket.onerror = (error) => {
    console.error('WebSocket错误:', error);
  };

  webSocket.onclose = () => {
    console.log('WebSocket连接已关闭');
  };

})
</script>

<template>
  <div id="operate">
<!--      <SvgRenderer :data="objList" />-->

      <svg width="100%" height="100%">
        <template v-for="(item) in objList" :key="item.mName">
          <text v-if="item.mDispName && item.mName1pos" fill="white" font-size="14px" font-family="SimSun" :x="item.mName1pos.x" :y="item.mName1pos.y" dy="8">{{ item.mDispName }}</text>
<!--          <text v-if="item.mDispName == '1085G'" fill="white" :font-size="item.fontSize+'px'" font-family="SimSun" :x="item.mName1pos.x" :y="item.mName1pos.y" :dy="item.fontSize/2">{{ item.mDispName }}</text>-->
          <line v-if="item.mPointArray" stroke-width="1" stroke="yellow" :x1="item.mPointArray[0].x" :y1="item.mPointArray[0].y" :x2="item.mPointArray[1].x" :y2="item.mPointArray[1].y"></line>
          <line v-if="item.mPointArray" stroke="white" stroke-width="2" :x1="item.mPointArray[1].x" :y1="item.mPointArray[1].y-3" :x2="item.mPointArray[1].x" :y2="item.mPointArray[1].y+3"></line>
          <rect v-if="markText && item.mMarkRect && item.mMarkRect.left && item.mMarkRect.top && item.mMarkRect.right && item.mMarkRect.bottom && item.mMarkRect.left != 0" stroke="white" stroke-width="1" fill="yellow" :x="item.mMarkRect.left" :y="item.mMarkRect.top" :width="item.mMarkRect.right - item.mMarkRect.left" :height="item.mMarkRect.bottom - item.mMarkRect.top"></rect>
        </template>

      </svg>
  </div>
</template>

<style scoped  lang="scss">
#operate {
  //width: 100%;
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  background-color: #000;
  border: 0;
  padding: 0;
  margin: 0;
}

//.visbArea {
//  border: 0;
//  padding: 0;
//  margin: 0;
//  height: 100%;
//  background-color: #000;
//  padding: 10px;
//
//}

//.btns {
//  flex: 1;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  color: #fff;;
//  border-bottom: 1px solid #8b8b8b;
//  margin:0 20px;
//}

//.tips {
//  flex: 1;
//  display: flex;
//  align-items: center;
//  background-color: #424242;
//  color: #fff;;
//
//  div {
//    display: inline-block;
//  }
//
//  .msgBox {
//    width: calc(100% - 210px);
//    padding-left: 20px;
//  }
//
//  .timeBox {
//    width: 200px
//  }
//}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

.blinking-line {
  animation: blink 1s infinite;
}
</style>
