import { ref, set, push } from 'firebase/database'
import { database } from '../firebase'
import axios from 'axios'

export function pushNotification({ token, payload }) {
  return axios.post('https://qr-fcm.onrender.com/send-notification', {
    token,
    payload: { title: payload.radioOptions, body: payload.desc },
  })
}

export async function sendMessage(payload) {
  let id = payload.key
  const dbRef = ref(database, `messages/${id}`)

  const pushDbRef = push(dbRef)

  try {
    await set(pushDbRef, payload)
    const token =
      'ddhHWP68RruhKy4vZvSbpK:APA91bHDOPLvMq_vNAkpwS8QTQdQ-66pUvMPgNT8trDB_z-FHse7KKnKbAivqQFMPE2BNltwkqxvnLS7LFR17bWpusCkRvcmgx0v3qKRH8B29524MccrXEOOYcVEdJTV-j5UdjE4NIeB'
    await pushNotification({ payload, token })
  } catch (e) {
    throw new Error(e)
  }
}
