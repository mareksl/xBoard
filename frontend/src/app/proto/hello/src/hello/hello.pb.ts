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
import { GRPC_HELLO_SERVICE_CLIENT_SETTINGS } from './hello.pbconf';
export class HelloById implements GrpcMessage {
  static toBinary(instance: HelloById) {
    const writer = new BinaryWriter();
    HelloById.toBinaryWriter(instance, writer);
    return writer.getResultBuffer();
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new HelloById();
    HelloById.fromBinaryReader(instance, new BinaryReader(bytes));
    return instance;
  }

  static refineValues(instance: HelloById) {
    instance.id = instance.id || 0;
  }

  static fromBinaryReader(instance: HelloById, reader: BinaryReader) {
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

    HelloById.refineValues(instance);
  }

  static toBinaryWriter(instance: HelloById, writer: BinaryWriter) {
    if (instance.id) {
      writer.writeInt32(1, instance.id);
    }
  }

  private _id?: number;

  /**
   * Creates an object and applies default Protobuf values
   * @param HelloById value
   */
  constructor(value?: RecursivePartial<HelloById>) {
    value = value || {};
    this.id = value.id;
    HelloById.refineValues(this);
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
export module HelloById {}
export class HelloListRequest implements GrpcMessage {
  static toBinary(instance: HelloListRequest) {
    const writer = new BinaryWriter();
    HelloListRequest.toBinaryWriter(instance, writer);
    return writer.getResultBuffer();
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new HelloListRequest();
    HelloListRequest.fromBinaryReader(instance, new BinaryReader(bytes));
    return instance;
  }

  static refineValues(instance: HelloListRequest) {}

  static fromBinaryReader(instance: HelloListRequest, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;

      switch (reader.getFieldNumber()) {
        default:
          reader.skipField();
      }
    }

    HelloListRequest.refineValues(instance);
  }

  static toBinaryWriter(instance: HelloListRequest, writer: BinaryWriter) {}

  /**
   * Creates an object and applies default Protobuf values
   * @param HelloListRequest value
   */
  constructor(value?: RecursivePartial<HelloListRequest>) {
    value = value || {};
    HelloListRequest.refineValues(this);
  }
  toObject() {
    return {};
  }
  toJSON() {
    return this.toObject();
  }
}
export module HelloListRequest {}
export class Hello implements GrpcMessage {
  static toBinary(instance: Hello) {
    const writer = new BinaryWriter();
    Hello.toBinaryWriter(instance, writer);
    return writer.getResultBuffer();
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new Hello();
    Hello.fromBinaryReader(instance, new BinaryReader(bytes));
    return instance;
  }

  static refineValues(instance: Hello) {
    instance.id = instance.id || 0;
    instance.message = instance.message || '';
  }

  static fromBinaryReader(instance: Hello, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;

      switch (reader.getFieldNumber()) {
        case 1:
          instance.id = reader.readInt32();
          break;
        case 2:
          instance.message = reader.readString();
          break;
        default:
          reader.skipField();
      }
    }

    Hello.refineValues(instance);
  }

  static toBinaryWriter(instance: Hello, writer: BinaryWriter) {
    if (instance.id) {
      writer.writeInt32(1, instance.id);
    }
    if (instance.message) {
      writer.writeString(2, instance.message);
    }
  }

  private _id?: number;
  private _message?: string;

  /**
   * Creates an object and applies default Protobuf values
   * @param Hello value
   */
  constructor(value?: RecursivePartial<Hello>) {
    value = value || {};
    this.id = value.id;
    this.message = value.message;
    Hello.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }
  toObject() {
    return {
      id: this.id,
      message: this.message
    };
  }
  toJSON() {
    return this.toObject();
  }
}
export module Hello {}
export class HelloList implements GrpcMessage {
  static toBinary(instance: HelloList) {
    const writer = new BinaryWriter();
    HelloList.toBinaryWriter(instance, writer);
    return writer.getResultBuffer();
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new HelloList();
    HelloList.fromBinaryReader(instance, new BinaryReader(bytes));
    return instance;
  }

  static refineValues(instance: HelloList) {
    instance.messages = instance.messages || [];
  }

  static fromBinaryReader(instance: HelloList, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;

      switch (reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Hello();
          reader.readMessage(messageInitializer1, Hello.fromBinaryReader);
          (instance.messages = instance.messages || []).push(
            messageInitializer1
          );
          break;
        default:
          reader.skipField();
      }
    }

    HelloList.refineValues(instance);
  }

  static toBinaryWriter(instance: HelloList, writer: BinaryWriter) {
    if (instance.messages && instance.messages.length) {
      writer.writeRepeatedMessage(
        1,
        instance.messages as any,
        Hello.toBinaryWriter
      );
    }
  }

  private _messages?: Hello[];

  /**
   * Creates an object and applies default Protobuf values
   * @param HelloList value
   */
  constructor(value?: RecursivePartial<HelloList>) {
    value = value || {};
    this.messages = (value.messages || []).map(m => new Hello(m));
    HelloList.refineValues(this);
  }
  get messages(): Hello[] | undefined {
    return this._messages;
  }
  set messages(value: Hello[] | undefined) {
    this._messages = value;
  }
  toObject() {
    return {
      messages: (this.messages || []).map(m => m.toObject())
    };
  }
  toJSON() {
    return this.toObject();
  }
}
export module HelloList {}

@Injectable({
  providedIn: 'root'
})
export class HelloServiceClient {
  private client: GrpcClient;

  constructor(
    @Inject(GRPC_HELLO_SERVICE_CLIENT_SETTINGS) settings: GrpcClientSettings,
    private handler: GrpcHandler
  ) {
    this.client = new GrpcClient(settings);
  }

  /**
   * Unary RPC
   * @param HelloById request
   * @param Metadata metadata
   * @return Hello
   */
  findOne(requestData: HelloById, requestMetadata: Metadata = {}) {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/hello.HelloService/FindOne',
      requestData,
      requestMetadata,
      requestClass: HelloById,
      responseClass: Hello
    }) as Observable<Hello>;
  }

  /**
   * Unary RPC
   * @param HelloListRequest request
   * @param Metadata metadata
   * @return HelloList
   */
  findAll(requestData: HelloListRequest, requestMetadata: Metadata = {}) {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/hello.HelloService/FindAll',
      requestData,
      requestMetadata,
      requestClass: HelloListRequest,
      responseClass: HelloList
    }) as Observable<HelloList>;
  }

  /**
   * Unary RPC
   * @param Hello request
   * @param Metadata metadata
   * @return Hello
   */
  addOne(requestData: Hello, requestMetadata: Metadata = {}) {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/hello.HelloService/AddOne',
      requestData,
      requestMetadata,
      requestClass: Hello,
      responseClass: Hello
    }) as Observable<Hello>;
  }
}
