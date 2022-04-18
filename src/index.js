import React,{ useRef, useLayoutEffect, useEffect, useState }  from "react";
import ReactDOM from "react-dom";
import SpenserApp from "./SpenserApp";

// import App from './App.vue'
// // import LoggedInNav from "./components/common/LoggedInNav"

// import { createApp } from 'vue'
// import config from './components/tracker/config'
// import translations from './components/tracker/translations/translations.json'
// import { registerServiceWorker } from './components/tracker/utils'

// import {applyVueInReact} from 'veaury'


// const containerRef = useRef(null);
// const [activeRouteType, setActiveRouteType] = useState('/');

// /* 创建并挂载Vue实例 */
// useLayoutEffect(() => {
//     const container = containerRef.current;
//      // createVueApp 为封装的一个方法，用于创建一个完整的Vue App实例，参考附录代码
//     // const app = createVueApp();
//     // app.$mount(container);
// 	const app = createApp(App)
// 	registerServiceWorker()
// 	app.config.globalProperties.config = config // <- set config to global scope
// 	app.config.globalProperties.translations = translations // <- set translations to global scope

// 	/* (global) This code is going to tell us, if history mode can be activated on the client,
// 	so the application can be consumed without sessionStorage */
// 	app.config.globalProperties.history = () => {
// 	try {
// 		sessionStorage.getItem('check')
// 		return true
// 	} catch {
// 		return false
// 	}
// 	}

// 	/* (global) Currently selected language or fallback language (en). 
// 	Needs to be a function, since it's reactive. No need for vuex there */
// 	app.config.globalProperties.lang = () => {
// 		if (app.config.globalProperties.history()) return sessionStorage.getItem('lang') || config.fallback_lang
// 		return config.fallback_lang
// 	}
	
// 	/* (global) Debug mode */
// 	app.config.globalProperties.debug = () => process.env.NODE_ENV === 'development'
// 	// app.mount('#app')
// 	app.mount(container);
//   }, []);

  
//   useEffect(() => {
//     const unsubscribe = window.store.subscribe(function(state) {
//       if (state.vuex.routing) {
//         setActiveRouteType(state.vuex.routing.type);
//       }
//     });
//     return () => {
//       // 组件卸载时取消订阅
//       unsubscribe();
//     }
//   }, []);


// const Tracker = applyVueInReact(app)

ReactDOM.render(
	<React.StrictMode>
		<SpenserApp />
	</React.StrictMode>,
	document.getElementById("root")
);
