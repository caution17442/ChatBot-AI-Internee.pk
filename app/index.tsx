
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
// } from "react-native";
// import axios from "axios";

// export default function Chatbot() {
//   const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { role: "user", text: input }];
//     setMessages(newMessages);
//     setInput("");

//     try {
//       const response = await axios.post(
//         "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=API-KEY",
//         {
//           contents: [
//             {
//               role: "user",
//               parts: [{ text: input }],
//             },
//           ],
//         },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       const reply =
//         response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "No response";

//       setMessages([...newMessages, { role: "model", text: reply }]);
//     } catch (error: any) {
//       console.error("Gemini API Error:", error.message);
//       setMessages([
//         ...newMessages,
//         { role: "model", text: "⚠️ Sorry, I couldn’t process that." },
//       ]);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f7fb" }}>
//       {/* Header */}
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           padding: 16,
//           backgroundColor: "#007AFF",
//           marginTop: 10, // space from top
//           borderBottomLeftRadius: 12,
//           borderBottomRightRadius: 12,
//           shadowColor: "#000",
//           shadowOpacity: 0.1,
//           shadowOffset: { width: 0, height: 2 },
//           shadowRadius: 4,
//           elevation: 3,
//         }}
//       >
//         <Image
//           source={{
//             uri: "https://img.icons8.com/ios-filled/50/ffffff/chatbot.png",
//           }}
//           style={{ width: 30, height: 30, marginRight: 10, tintColor: "#fff" }}
//         />
//         <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
//           ChatBot AI
//         </Text>
//       </View>

//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         keyboardVerticalOffset={80}
//       >
//         {/* Chat messages */}
//         <ScrollView
//           style={{ flex: 1, paddingHorizontal: 12, marginTop: 8 }}
//           contentContainerStyle={{ paddingBottom: 20 }}
//         >
//           {messages.map((msg, index) => (
//             <View
//               key={index}
//               style={{
//                 marginVertical: 6,
//                 padding: 12,
//                 borderRadius: 18,
//                 maxWidth: "75%",
//                 alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
//                 backgroundColor: msg.role === "user" ? "#007AFF" : "#EAEAEA",
//                 shadowColor: "#000",
//                 shadowOpacity: 0.05,
//                 shadowOffset: { width: 0, height: 1 },
//                 shadowRadius: 2,
//                 elevation: 2,
//               }}
//             >
//               <Text
//                 style={{
//                   color: msg.role === "user" ? "#fff" : "#333",
//                   fontSize: 15,
//                   lineHeight: 20,
//                 }}
//               >
//                 {msg.text}
//               </Text>
//             </View>
//           ))}
//         </ScrollView>

//         {/* Input bar */}
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             padding: 10,
//             backgroundColor: "#fff",
//             borderTopWidth: 1,
//             borderColor: "#ddd",
//             marginBottom: 12, // space from bottom
//           }}
//         >
//           <TextInput
//             style={{
//               flex: 1,
//               borderWidth: 1,
//               borderColor: "#ccc",
//               paddingVertical: 10,
//               paddingHorizontal: 15,
//               borderRadius: 25,
//               backgroundColor: "#f9f9f9",
//               fontSize: 15,
//             }}
//             value={input}
//             onChangeText={setInput}
//             placeholder="Type a message..."
//             placeholderTextColor="#888"
//           />
//           <TouchableOpacity
//             onPress={sendMessage}
//             style={{
//               marginLeft: 10,
//               backgroundColor: "#007AFF",
//               paddingVertical: 12,
//               paddingHorizontal: 18,
//               borderRadius: 25,
//               justifyContent: "center",
//               alignItems: "center",
//               shadowColor: "#000",
//               shadowOpacity: 0.1,
//               shadowOffset: { width: 0, height: 2 },
//               shadowRadius: 3,
//               elevation: 3,
//             }}
//           >
//             <Text style={{ color: "#fff", fontWeight: "600", fontSize: 15 }}>
//               Send
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyA6Aw5J5f3UFrCxYNSJoT5phSl-0kwtv1o",
        {
          contents: [
            {
              role: "user",
              parts: [{ text: input }],
            },
          ],
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const reply =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response";

      setMessages([...newMessages, { role: "model", text: reply }]);
    } catch (error: any) {
      console.error("Gemini API Error:", error.message);
      setMessages([
        ...newMessages,
        { role: "model", text: "⚠️ Sorry, I couldn’t process that." },
      ]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f7fb" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          marginTop: 20, // ⬆️ extra top margin
          marginHorizontal: 12,
          backgroundColor: "#007AFF",
          borderRadius: 16, // rounded header
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 6,
          elevation: 4,
        }}
      >
        <Image
          source={{
            uri: "https://img.icons8.com/ios-filled/50/ffffff/chatbot.png",
          }}
          style={{ width: 32, height: 32, marginRight: 10, tintColor: "#fff" }}
        />
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
          ChatBot AI
        </Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        {/* Chat messages */}
        <ScrollView
          style={{ flex: 1, paddingHorizontal: 12, marginTop: 8 }}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {messages.map((msg, index) => (
            <View
              key={index}
              style={{
                marginVertical: 6,
                padding: 12,
                borderRadius: 18,
                maxWidth: "75%",
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                backgroundColor: msg.role === "user" ? "#007AFF" : "#EAEAEA",
                shadowColor: "#000",
                shadowOpacity: 0.05,
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              <Text
                style={{
                  color: msg.role === "user" ? "#fff" : "#333",
                  fontSize: 15,
                  lineHeight: 20,
                }}
              >
                {msg.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Input bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderColor: "#eee",
            marginBottom: 25, // ⬇️ more bottom margin
            marginHorizontal: 10,
            borderRadius: 30,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: -2 },
            shadowRadius: 5,
            elevation: 4,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 12,
              paddingHorizontal: 18,
              borderRadius: 25,
              backgroundColor: "#f1f1f1",
              fontSize: 15,
              color: "#333",
            }}
            value={input}
            onChangeText={setInput}
            placeholder="💬 Type something..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={{
              marginLeft: 10,
              backgroundColor: "#007AFF",
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOpacity: 0.15,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
              ➤
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
