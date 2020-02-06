/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientSettings,
  GrpcHandler,
  GrpcMessage,
  RecursivePartial
} from '@ngx-grpc/core';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import { GRPC_USERS_SERVICE_CLIENT_SETTINGS } from './users.pbconf';
export class UserById implements GrpcMessage {
  static toBinary(instance: UserById) {
    const writer = new BinaryWriter();
    UserById.toBinaryWriter(instance, writer);
    return writer.getResultBuffer();
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new UserById();
    UserById.fromBinaryReader(instance, new BinaryReader(bytes));
    return instance;
  }

  static refineValues(instance: UserById) {
    instance.id = instance.id || 0;
  }

  static fromBinaryReader(instance: UserById, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;

      switch (reader.getFieldNumber()) {
        case 1:
          instance.id = reader.readInt32();
          break;
        default:
          reader.skipField();
      }
    }

    UserById.refineValues(instance);
  }

  static toBinaryWriter(instance: UserById, writer: BinaryWriter) {
    if (instance.id) {
      writer.writeInt32(1, instance.id);
    }
  }

  private _id?: number;

  /**
   * Creates an object and applies default Protobuf values
   * @param UserById value
   */
  constructor(value?: RecursivePartial<UserById>) {
    value = value || {};
    this.id = value.id;
    UserById.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  toObject() {
    return {
      id: this.id
    };
  }
  toJSON() {
    return this.toObject();
  }
}
export module UserById {}
export class UserListRequest implements GrpcMessage {
  static toBinary(instance: UserListRequest) {
    const writer = new BinaryWriter();
    UserListRequest.toBinaryWriter(instance, writer);
    return writer.getResultBuffer();
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new UserListRequest();
    UserListRequest.fromBinaryReader(instance, new BinaryReader(bytes));
    return instance;
  }

  static refineValues(instance: UserListRequest) {}

  static fromBinaryReader(instance: UserListRequest, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;

      switch (reader.getFieldNumber()) {
        default:
          reader.skipField();
      }
    }

    UserListRequest.refineValues(instance);
  }

  static toBinaryWriter(instance: UserListRequest, writer: BinaryWriter) {}

  /**
   * Creates an object and applies default Protobuf values
   * @param UserListRequest value
   */
  constructor(value?: RecursivePartial<UserListRequest>) {
    value = value || {};
    UserListRequest.refineValues(this);
  }
  toObject() {
    return {};
  }
  toJSON() {
    return this.toObject();
  }
}
export module UserListRequest {}
export class User implements GrpcMessage {
  static toBinary(instance: User) {
    const writer = new BinaryWriter();
    User.toBinaryWriter(instance, writer);
    return writer.getResultBuffer();
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new User();
    User.fromBinaryReader(instance, new BinaryReader(bytes));
    return instance;
  }

  static refineValues(instance: User) {
    instance.id = instance.id || 0;
    instance.username = instance.username || '';
  }

  static fromBinaryReader(instance: User, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;

      switch (reader.getFieldNumber()) {
        case 1:
          instance.id = reader.readInt32();
          break;
        case 2:
          instance.username = reader.readString();
          break;
        default:
          reader.skipField();
      }
    }

    User.refineValues(instance);
  }

  static toBinaryWriter(instance: User, writer: BinaryWriter) {
    if (instance.id) {
      writer.writeInt32(1, instance.id);
    }
    if (instance.username) {
      writer.writeString(2, instance.username);
    }
  }

  private _id?: number;
  private _username?: string;

  /**
   * Creates an object and applies default Protobuf values
   * @param User value
   */
  constructor(value?: RecursivePartial<User>) {
    value = value || {};
    this.id = value.id;
    this.username = value.username;
    User.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  toObject() {
    return {
      id: this.id,
      username: this.username
    };
  }
  toJSON() {
    return this.toObject();
  }
}
export module User {}
export class UserList implements GrpcMessage {
  static toBinary(instance: UserList) {
    const writer = new BinaryWriter();
    UserList.toBinaryWriter(instance, writer);
    return writer.getResultBuffer();
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new UserList();
    UserList.fromBinaryReader(instance, new BinaryReader(bytes));
    return instance;
  }

  static refineValues(instance: UserList) {
    instance.users = instance.users || [];
  }

  static fromBinaryReader(instance: UserList, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;

      switch (reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new User();
          reader.readMessage(messageInitializer1, User.fromBinaryReader);
          (instance.users = instance.users || []).push(messageInitializer1);
          break;
        default:
          reader.skipField();
      }
    }

    UserList.refineValues(instance);
  }

  static toBinaryWriter(instance: UserList, writer: BinaryWriter) {
    if (instance.users && instance.users.length) {
      writer.writeRepeatedMessage(
        1,
        instance.users as any,
        User.toBinaryWriter
      );
    }
  }

  private _users?: User[];

  /**
   * Creates an object and applies default Protobuf values
   * @param UserList value
   */
  constructor(value?: RecursivePartial<UserList>) {
    value = value || {};
    this.users = (value.users || []).map(m => new User(m));
    UserList.refineValues(this);
  }
  get users(): User[] | undefined {
    return this._users;
  }
  set users(value: User[] | undefined) {
    this._users = value;
  }
  toObject() {
    return {
      users: (this.users || []).map(m => m.toObject())
    };
  }
  toJSON() {
    return this.toObject();
  }
}
export module UserList {}

@Injectable({
  providedIn: 'root'
})
export class UsersServiceClient {
  private client: GrpcClient;

  constructor(
    @Inject(GRPC_USERS_SERVICE_CLIENT_SETTINGS) settings: GrpcClientSettings,
    private handler: GrpcHandler
  ) {
    this.client = new GrpcClient(settings);
  }

  /**
   * Unary RPC
   * @param UserById request
   * @param Metadata metadata
   * @return User
   */
  findOne(requestData: UserById, requestMetadata: Metadata = {}) {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/users.UsersService/FindOne',
      requestData,
      requestMetadata,
      requestClass: UserById,
      responseClass: User
    }) as Observable<User>;
  }

  /**
   * Unary RPC
   * @param UserListRequest request
   * @param Metadata metadata
   * @return UserList
   */
  findAll(requestData: UserListRequest, requestMetadata: Metadata = {}) {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/users.UsersService/FindAll',
      requestData,
      requestMetadata,
      requestClass: UserListRequest,
      responseClass: UserList
    }) as Observable<UserList>;
  }

  /**
   * Unary RPC
   * @param User request
   * @param Metadata metadata
   * @return User
   */
  addOne(requestData: User, requestMetadata: Metadata = {}) {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/users.UsersService/AddOne',
      requestData,
      requestMetadata,
      requestClass: User,
      responseClass: User
    }) as Observable<User>;
  }
}
