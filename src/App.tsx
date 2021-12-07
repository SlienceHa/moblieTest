import React, { CSSProperties } from 'react';
import './App.css';
import  img from './code.png' 

const name = decodeURIComponent(window.location.href?.split('?')[1]?.split('=')[1]) || '尚海涵';
function App() {
    const [time,setTime] = React.useState<string[]>([]);
    React.useEffect(()=>{
        const timer = setInterval(()=>{ 
            let month:string = (new Date().getMonth()+1).toLocaleString().padStart(2,'0');
            let day:string = new Date().getDate().toLocaleString().padStart(2,'0');
            let hour:string = new Date().getHours().toLocaleString().padStart(2,'0');
            let minute:string = new Date().getMinutes().toLocaleString().padStart(2,'0');
            let second:string = new Date().getSeconds().toLocaleString().padStart(2,'0');
            let date = month + '月' + day + '日' 
            let datetime = hour+":"+minute+":"+second;
            setTime([date,datetime]);
        },1000)
        return ()=>{
            clearInterval(timer);
        }
    },[]);
    const yearDay = new Date().getFullYear().toString() +"-"+  (new Date().getMonth()+1).toLocaleString().padStart(2,'0') + "-" + new Date().getDate().toLocaleString().padStart(2,'0');
    return (
        <div className="App">
        <div style={contentBox}>
            <div style={nowTime}>
                {time[0]}
            </div>
            <div style={nowTimeBig}>
                {time[1]}
            </div>
            <div  style={topTitle}>
                    <p style={{fontSize:'1.0rem',margin:'0',fontFamily:'Microsoft YaHei',fontWeight:'450'}}>{'姓名：' + name}</p>
                    <p style={{fontSize:'13px',margin:'0'}}>单位：信息管理与人工智能学院</p>
            </div>
            <div style={{position:'absolute',right:'0',top:'7.7rem',cursor:'pointer'}}>
                    <img src="https://e.zufe.edu.cn/zcxs/resources/jkm/images/an1.png" alt="" onClick={()=>{window.location.reload();}}/>
            </div>
            <div className="code"></div>
             <div style={{color:'#c4a861',fontWeight:'500',fontSize:'1.2rem'}}>新冠疫苗接种情况 
                 <span style={{color:'#1e91f6'}}>  已接种</span>
             </div>
             <div style={{color:'#c4a861',fontWeight:'500',fontSize:'0.9rem',marginTop:'0.8rem'}}>第一针 2021-04-21 第二针 2021-06-03</div>
             <div style={{color: 'grey',fontWeight:'500',fontSize:'0.9rem'}}>更新时间：{yearDay+ " " +time[1]}</div>
             <div style={{color: 'grey',fontWeight:'500',fontSize:'0.9rem'}}>有效期：{yearDay} 0:00-24:00</div>
             <div style={{textAlign:'center',paddingTop:'20px'}}>
                <a href="https://e.zufe.edu.cn/infoplus/form/XSCWJCSQ/start?back=1&x_posted=true" target="_blank">通行码申请</a>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <a href="https://e.zufe.edu.cn/infoplus/form/XSCWJCSQ/start?back=1&x_posted=true" target="_blank">学生返校申请</a>
            </div>
            <div >
                <a href="https://e.zufe.edu.cn/infoplus/form/XSCWJCSQ/start?back=1&x_posted=true" target="_blank">通信大数据行程卡</a>
            </div>
            
        </div>
        </div>
    );
}

const contentBox:React.CSSProperties ={
    width:'90%',
    height:'600px',
    borderRadius:'10px',
    boxShadow:'0 0 8px rgba(0, 0, 0, 0.4)',
    backgroundColor:'white',
    margin:'0 auto',
    position:'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:'3rem',

}
const topTitle:React.CSSProperties ={
    width:'79%',
    margin:'0 auto',
    lineHeight:'30px',
    marginLeft:'10px',
    marginTop:'1rem'
}
const nowTime:React.CSSProperties ={
   width:'90%',
   margin:'0 auto',
   textAlign:'center',
   lineHeight:'24px',
   fontSize:'2.5rem',
   fontWeight:'bold',
   marginTop:'1.6rem',
   color: '#424242'
}
const nowTimeBig:React.CSSProperties ={
    width:'90%',
    margin:'0 auto',
    textAlign:'center',
    fontSize:'3rem',
    fontWeight:'bold',
    marginTop:'0.2rem',
    color: '#424242'
 }



export default App;
