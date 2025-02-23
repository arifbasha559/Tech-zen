import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogState from './context/BlogState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BlogState>

    <App />
    </BlogState>
  
)
