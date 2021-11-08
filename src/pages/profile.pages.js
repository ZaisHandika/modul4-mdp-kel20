import React from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';

const {ProfileStyle} = Style;

function ProfilePages() {

  const [data, setData] = React.useState('')
  const [count, setCount] = React.useState(0)

  const username =
    count % 4 === 0 ? 'ZikriFarhan' : count % 4 === 1 ? 'ZaisHandika' : count % 4 === 2 ? 'nurhaidah346' : "firman0352"
  const max = username.length

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => setData(res.data))
        .catch((e) => Alert.alert('Gagal!', e))
      return request
    }
    fetchData()
  }, [count])

  const next = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <View style={ProfileStyle.container}>
      <View style={ProfileStyle.headerContainer}>
        <Image
          source={{
            uri: data.avatar_url,
          }}
          style={ProfileStyle.headerImage}
        />
        <Text style={ProfileStyle.headerTXT}>
          {data.name === null ? 'Full name' : data.name}
        </Text>
        <Text
          style={ProfileStyle.headerTXTDesc}
        >{`Username: ${data.login}`}
        </Text>
        <Text
          style={ProfileStyle.headerTXTDesc}
        >{`Repositories: ${data.public_repos}`}</Text>
        <Text
          style={ProfileStyle.headerTXTDesc}
        >{`Followers: ${data.followers} | Following: ${data.following}`}</Text>
      </View>
      <TouchableOpacity
        style={ProfileStyle.bodyTouchable}
        onPress={() => next()}
      >
        <Text style={ProfileStyle.bodyTXT}>NEXT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfilePages