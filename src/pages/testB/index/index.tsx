import {useCallback} from "react";
import {View, Text, Button, Image} from "@tarojs/components";
import {useEnv, useNavigationBar, useModal, useToast} from "taro-hooks";
import logo from "@/images/hook.png";
// @ts-ignore
import HelloWord from "@/components/HelloWord";

import './index.scss'

const Index = () => {
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
      <View className='list'>
        <Text className='note'>{env}</Text>
      </View>
      <Button className='button' onClick={() => setTitle("Taro Hooks Nice!")}>
        设置标题
      </Button>
      <Button className='button' onClick={handleModal}>
        使用Modal
      </Button>
      <HelloWord></HelloWord>
    </View>
  );
};

export default Index;
