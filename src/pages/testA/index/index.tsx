import React, {useCallback} from "react";
import {View, Text, Button, Image} from "@tarojs/components";
import {useEnv, useNavigationBar, useModal, useToast} from "taro-hooks";
import logo from "@/images/hook.png";
// @ts-ignore
import HelloWord from "@/components/HelloWord";
import './index.scss'

interface indexProp {
  loading?: boolean
}
const IndexPage:React.FC<indexProp> = (loading) => {
  const env = useEnv();
  const [_, {setTitle}] = useNavigationBar({title: "Taro Hooks"});
  const [show] = useModal({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true,
  });
  const [showToast] = useToast({mask: true});

  const handleModal = useCallback(() => {
    show({content: "不如给一个star⭐️!"}).then(() => {
      showToast({title: "点击了支持!"});
    });
  }, [show, showToast]);

  return (
    <View className='wrapper'>
      <Image className='logo' src={logo} />
      <Text className='title'>为Taro而设计的Hooks Library</Text>
      <Text className='desc'>
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro!
      </Text>
      <View className='list'>
        <Text className='label'>运行环境</Text>
        <Text className='note'>{env}</Text>
      </View>
      <HelloWord></HelloWord>
      <Button className='button' onClick={() => setTitle("Taro Hooks Nice!")}>
        设置标题
      </Button>
      <Button className='button' onClick={handleModal}>
        使用Modal
      </Button>
    </View>
  );
};

export default IndexPage;
