<template>
        <div class="root-wrapper">
            <h2>支持功能：（暂不支持动态修改）</h2>
            <button type="primary" size="small" @click="start">开始录音</button>
            <van-row>
                <van-checkbox v-model="useVAD" disabled >音量检测
                    <div class="volumn-process">
                        <span class="bar" :style="{ width: volume/30*100 + '%' }"></span>
                    </div>
                </van-checkbox>
            </van-row>
            <van-row>
                <van-checkbox v-model="useVVD" disabled>端点检测</van-checkbox>
            </van-row>
            <van-row class="action">
                <van-col span="6">
                    <!-- <van-button type="primary" size="small" @click="start">开始录音</van-button> -->
                </van-col>
                <van-col span="6">
                    <van-button type="default" size="small" @click="stop">停止录音</van-button>
                </van-col>
                <van-col span="6">
                    <van-button type="default" size="small" @click="exportWAV">导出 WAV</van-button>
                </van-col>
                <van-col span="6">
                    <van-button type="danger" size="small" @click="destroy">销毁录音对象</van-button>
                </van-col>
            </van-row>
    
            <!-- <van-row v-if="useVAD">
                音量：
            </van-row> -->
    
            <ul class="list">
                <li class="item" v-for="item in list">
                    <audio controls :src="item"></audio>
                </li>
            </ul>
        </div>
    </template>
    
    <script>
        // import Recorder from '../../src/index.js'
        import axios from 'Axios'
        // import Recorder from '@/js/recorder.min.js'
        export default {
            name: 'audio',
            data() {
                return {
                    useVAD: true,
                    useVVD: true,
                    recorder: null,
                    list: [],
                    volume: 0
                };
            },
            mounted(){
                this.recorder = new Recorder({
                    isPreAuth: true,
                    isExportURL: true,
                    useVAD: this.useVAD,
                    useVVD: this.useVVD
                })
                // this.recorder.preAuth();
                // 预授权失败
                this.recorder.on('preAuthError', (e)=>{
                    console.log('预授权失败：' + e);
                });
                // 预授权成功
                this.recorder.on('preAuth', (e)=>{
                    console.log('预授权成功。');
                });
    
                //录音开始成功
                this.recorder.on('start', ()=>{
                    console.log('录音开始成功。');
                });
    
                //录音停止成功
                this.recorder.on('stop', ()=>{
                    console.log('录音停止成功。');
                });
    
                //录音销毁
                this.recorder.on('destroy', ()=>{
                    console.log('录音销毁');
                });
    
                //获取音频
                this.recorder.on('exportWAV', (data)=>{
                    console.log(data);
                });
    
                //获取音频
                this.recorder.on('audioProcess', (data)=>{
                    // console.log(data);
                });
    
                //音量
                this.recorder.on('volumeChange', (volume) => {
                    // console.log(volume);
                    this.volume = volume || 0;
                });
    
                // 端点监测结束
                this.recorder.on('vadEnd', (data)=> {
                    this.recorder.exportWAV((data, url)=>{
                        this.list.push(url)
                    });
                });
    
                // 页面隐藏时 停止录音
                document.addEventListener('visibilitychange', () => {
                    if (document.hidden) {
                        this.recorder.destroy();
                    }
                });
            },
            methods: {
                start(){
                    // 开始录音
                    this.recorder.start();
                },
                stop(){
                    // 停止录音
                    this.recorder.stop();
                },
                destroy(){
                    // 销毁录音
                    this.recorder.destroy();
                },
                exportWAV(){
                    // 导出
                    this.recorder.exportWAV((data, url)=>{
                        this.list.push(url)
    
                        var formData = new FormData() // 创建 formData
                        formData.append('voice', data)
                        axios({
                            method: 'POST',
                            headers: {
                                'Content-Type': 'multipart/form-data' // 指定传输数据为二进制类型
                            },
                            data: formData,
                            url: './api/upload',
                            responseType: 'json'
                        }).then((res) => {
                            if( res.data.status ){
                                alert('上传成功')
                            } else {
                                alert('上传失败')
                            }
                        }).catch((err) => {
                            alert('上传失败')
                        });
                    });
                }
            }
        };
    
    </script>
    
    
    <style>
    .root-wrapper
    {
        padding: 10px;
    }
    .root-wrapper h2
    {
        margin: 0px;
        line-height: 30px;
        color: #666;
        font-size: 14px;
        font-weight: normal;
    }
    .root-wrapper .van-checkbox .van-icon
    {
        border-color: #06bf04!important;
        background-color: #06bf04!important;
    }
    .root-wrapper .van-row
    {
        margin: 10px 0px;
    }
    .root-wrapper .van-row.action
    {
        margin-top: 20px;
    }
    .root-wrapper audio
    {
        width: 100%;
    }
    .volumn-process
    {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 10px;
    }
    .volumn-process .bar
    {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        background-color: #4688F1;
    }
    </style>
    