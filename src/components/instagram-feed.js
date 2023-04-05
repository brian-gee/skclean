const ACCESSTOKEN = import.meta.env.PUBLIC_ACCESSTOKEN
const USERID = import.meta.env.PUBLIC_USERID

export async function fetchInstagramFeed() {
  const apiUrl = `https://graph.instagram.com/${USERID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESSTOKEN}`

  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching Instagram feed:', error)
    return []
  }
}
