import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;



const Spinner = (props) => {
  return (
    <Spin
    className='spinner-container h-full w-full'
    indicator={antIcon}
    spinning={props.isLoading}
    delay={props.delay ? props.delay : 0}
    >
      {props.children}
    </Spin>
  )

}

export default Spinner;
