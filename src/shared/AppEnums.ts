﻿import { BookingAccessRecordInputSource, BookingAccessRecordInputWeChatSource, ChatMessageDtoReadState, ChatMessageDtoSide, CodeSendInputCodeType, CurrentUserProfileEditDtoGender, DefaultTimezoneScope, FriendDtoState, IsTenantAvailableOutputState, Status, UserNotificationState } from '@shared/service-proxies/service-proxies';

export class AppChatMessageReadState {
    static Unread: number = ChatMessageDtoReadState._1;
    static Read: number = ChatMessageDtoReadState._2;
}

export class AppChatSide {
    static Sender: number = ChatMessageDtoSide._1;
    static Receiver: number = ChatMessageDtoSide._2;
}

export class AppFriendshipState {
    static Accepted: number = FriendDtoState._1;
    static Blocked: number = FriendDtoState._2;
}


export class AppTimezoneScope {
    static Application: number = DefaultTimezoneScope._1;
    static Tenant: number = DefaultTimezoneScope._2;
    static User: number = DefaultTimezoneScope._4;
}

export class AppUserNotificationState {
    static Unread: number = UserNotificationState._0;
    static Read: number = UserNotificationState._1;
}

export class AppTenantAvailabilityState {
    static Available: number = IsTenantAvailableOutputState._1;
    static InActive: number = IsTenantAvailableOutputState._2;
    static NotFound: number = IsTenantAvailableOutputState._3;
}

// 根据枚举名获取数据源
export class AppEnumSelectItemSource {
    static UserActivationOption: string = 'UserActivationOption';
}

// 手机验证的类型
export class VerificationCodeType {
    static Register: number = CodeSendInputCodeType._10;
    static Login: number = CodeSendInputCodeType._20;
    static ChangePassword: number = CodeSendInputCodeType._30;
    static ChangeEmail: number = CodeSendInputCodeType._40;
    static PhoneBinding: number = CodeSendInputCodeType._50;
    static PhoneUnBinding: number = CodeSendInputCodeType._60;
    static PhoneVerify: number = CodeSendInputCodeType._70;
}

export class BookingOrderStatus {
    static State1: number = Status._1;
    static State2: number = Status._2;
    static State3: number = Status._3;
    static State4: number = Status._4;
    static State5: number = Status._5;
}

export class AppGender {
    static None: number = CurrentUserProfileEditDtoGender._0;
    static Male: number = CurrentUserProfileEditDtoGender._1;
    static Female: number = CurrentUserProfileEditDtoGender._2;
}


export class BookingAccessSourceType {

    static WeChat: number = BookingAccessRecordInputSource._10;
    static WeiBo: number = BookingAccessRecordInputSource._20;
    static QQ: number = BookingAccessRecordInputSource._30;
    static QrCode: number = BookingAccessRecordInputSource._40;
    static Other: number = BookingAccessRecordInputSource._50;

    static getType(source: string): number {
        switch (source) {
            case 'WeChat':
                return this.WeChat;
            case 'WeiBo':
                return this.WeiBo;
            case 'QQ':
                return this.QQ;
            case 'QrCode':
                return this.QrCode;
            default:
                return this.Other;
        }
    }
}

export class WeChatAccessSourceType {

    static SingleMessage: number = BookingAccessRecordInputWeChatSource._10;
    static GroupMessage: number = BookingAccessRecordInputWeChatSource._20;
    static TimeLine: number = BookingAccessRecordInputWeChatSource._30;
    static Other: number = BookingAccessRecordInputWeChatSource._40;

    static getType(source: string): number {
        switch (source) {
            case 'SingleMessage':
                return this.SingleMessage;
            case 'GroupMessage':
                return this.GroupMessage;
            case 'TimeLine':
                return this.TimeLine;
            default:
                return this.Other;
        }
    }
}


