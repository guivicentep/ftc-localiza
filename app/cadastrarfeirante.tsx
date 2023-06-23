import { Link, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import Logo from '../src/assets/logo-min.svg'
import { useState } from 'react'
import uuid from 'react-native-uuid'
import { FIREBASE_DB } from '../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

export default function RegisterMarket() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const addCase = async () => {
    setLoading(true)
    try {
      await addDoc(collection(FIREBASE_DB, 'cases'), {
        id: uuid.v4(),
        // description,
        // ongname,
        // value: amount,
      })
      router.push('/home')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <ScrollView className="bg-white flex-1 pt-44">
      <View className="ml-14">
        <Logo />
      </View>
      <View className="mx-6 my-20 flex-1 items-center justify-center rounded-2xl bg-white-150">
        <View className="flex-col  space-y-3">
          <Text className="mb-6 mt-10 font-title text-2xl leading-tight text-green-50">
            Vamos preencher suas informações!
          </Text>
          <TextInput
            className="h-10 w-64 rounded-2xl border border-gray-50 bg-gray-50 px-5 py-1 font-body text-base"
            placeholder="Usuário"
            // value={}
            // onChangeText={}
          />
          <TextInput
            className="mb-3 h-10 w-64 justify-center rounded-2xl border border-gray-50 bg-gray-50 px-5 pt-1 font-body text-base"
            placeholder="Senha"
            secureTextEntry={true}
            // value={password}
            // onChangeText={setPassword}
          />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#FFF112" />
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-10 w-44 items-center justify-center rounded-2xl bg-red-50 px-5 py-2"
            // onPress={signUp}
          >
            <Text className="font-title text-sm text-white-100 ">
              Cadastrar
            </Text>
          </TouchableOpacity>
        )}
        <Link href="/" asChild>
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-14 w-72 flex-row items-center justify-center rounded-3xl"
          >
            <Text className="text-l my-5 font-body text-gray-100 underline">
              Voltar
            </Text>
          </TouchableOpacity>
        </Link>
      </View>

      <StatusBar style="dark" />
    </ScrollView>
  )
}
