import React, { useState, useEffect } from 'react';
import { Search, Star, Calendar, Clock, Award, Filter, MessageCircle, User, LogOut, DollarSign, BookOpen, TrendingUp, CheckCircle, Zap, Crown, Bell, Video, Eye, Users, MessageSquare } from 'lucide-react';

// Mock data with real mentors - REDUCED PRICING
const MOCK_MENTORS = [
  {
    id: 1,
    name: "Bhuvan",
    specialization: "NEET Qualified - Pursuing MBBS",
    exam: "NEET",
    subjects: ["Biology", "Chemistry", "Physics"],
    experience: 2,
    price10min: 30,
    price45min: 120,
    monthlyPrice: 699,
    rating: 4.9,
    reviews: 85,
    tagline: "MBBS Student at King George Medical University, Lucknow",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bhuvan&backgroundColor=b6e3f4",
    about: "Currently pursuing MBBS at prestigious King George Medical University, Lucknow. I understand the NEET journey and can help you with effective preparation strategies, NCERT mastery, and exam psychology.",
    expertise: ["NCERT Mastery", "Biology Concepts", "Time Management", "Exam Strategy", "Mock Test Analysis"],
    sessions: 180,
    college: "King George Medical University, Lucknow",
    availableNow: true,
    nextAvailable: "Available Now",
    totalStudents: 142
  },
  {
    id: 2,
    name: "Firoz Alam",
    specialization: "UPSC CSE Rank 545",
    exam: "UPSC",
    subjects: ["History", "Political Science", "Current Affairs"],
    experience: 3,
    price10min: 50,
    price45min: 180,
    monthlyPrice: 999,
    rating: 5.0,
    reviews: 120,
    tagline: "UPSC Rank Holder - Expert in Strategy & Answer Writing",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=FirozAlam&backgroundColor=ffdfbf",
    about: "Cleared UPSC CSE with Rank 545. I specialize in helping aspirants with answer writing techniques, optional subject strategy, current affairs integration, and maintaining consistency throughout the preparation.",
    expertise: ["Answer Writing", "Optional Strategy", "Current Affairs", "Essay Writing", "Interview Preparation"],
    sessions: 350,
    college: "UPSC CSE Rank 545",
    availableNow: false,
    nextAvailable: "Today at 6:00 PM",
    totalStudents: 287
  },
  {
    id: 3,
    name: "Harish",
    specialization: "IIT JEE Qualified",
    exam: "IIT-JEE",
    subjects: ["Physics", "Mathematics", "Chemistry"],
    experience: 2,
    price10min: 35,
    price45min: 150,
    monthlyPrice: 799,
    rating: 4.8,
    reviews: 95,
    tagline: "IIIT Hyderabad Student - JEE Expert",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harish&backgroundColor=c0aede",
    about: "Currently studying at IIIT Hyderabad after cracking JEE. I can guide you through problem-solving techniques, concept clarity, and effective time management for JEE preparation.",
    expertise: ["Problem Solving", "Physics Concepts", "Mathematics Tricks", "JEE Advanced Tips", "Mock Analysis"],
    sessions: 220,
    college: "IIIT Hyderabad",
    availableNow: true,
    nextAvailable: "Available Now",
    totalStudents: 198
  },
  {
    id: 4,
    name: "Kesar",
    specialization: "CUET 99%ile - Jamia Millia Islamia",
    exam: "CUET",
    subjects: ["General Test", "English", "Domain Subjects"],
    experience: 1,
    price10min: 25,
    price45min: 99,
    monthlyPrice: 599,
    rating: 4.9,
    reviews: 65,
    tagline: "CUET Topper at Jamia Millia Islamia",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kesar&backgroundColor=ffd5dc",
    about: "Scored 99%ile in CUET and currently studying at prestigious Jamia Millia Islamia. I can help you understand CUET pattern, preparation strategy, and tips to score high percentile.",
    expertise: ["CUET Pattern", "General Test", "Time Management", "Subject Selection", "Previous Year Analysis"],
    sessions: 140,
    college: "Jamia Millia Islamia",
    availableNow: false,
    nextAvailable: "Tomorrow at 10:00 AM",
    totalStudents: 124
  },
  {
    id: 5,
    name: "Javed Sir",
    specialization: "Career Counselor & Life Coach",
    exam: "Counseling",
    subjects: ["Career Guidance", "Mental Health", "Study Planning"],
    experience: 8,
    price10min: 30,
    price45min: 120,
    monthlyPrice: 699,
    rating: 5.0,
    reviews: 450,
    tagline: "Mentored 500+ Students for Better Future",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=JavedSir&backgroundColor=d1d4f9",
    about: "Professional career counselor with 8 years of experience. I've mentored over 500 students in making the right career decisions, overcoming exam stress, and building a successful future. Specialized in holistic development.",
    expertise: ["Career Planning", "Mental Wellness", "Exam Anxiety", "Goal Setting", "Motivation", "Study-Life Balance"],
    sessions: 980,
    college: "Professional Career Counselor",
    availableNow: true,
    nextAvailable: "Available Now",
    totalStudents: 532
  },
  {
    id: 6,
    name: "Shikhar Bhiya",
    specialization: "DSA & Tech Interview Expert",
    exam: "Coding",
    subjects: ["Data Structures", "Algorithms", "System Design"],
    experience: 5,
    price10min: 40,
    price45min: 180,
    monthlyPrice: 899,
    rating: 5.0,
    reviews: 185,
    tagline: "Software Engineer at Bangalore - LPU Alumni",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ShikharBhiya&backgroundColor=b6e3f4",
    about: "Software Engineer at Bangalore and alumnus of Lovely Professional University. Expert in Data Structures & Algorithms with 5 years of experience helping students crack top tech companies. Specialized in competitive programming, DSA mastery, and technical interview preparation for FAANG and product-based companies.",
    expertise: ["Data Structures", "Algorithms", "Competitive Programming", "System Design", "Tech Interviews", "LeetCode Strategy"],
    sessions: 420,
    college: "Lovely Professional University - Software Engineer at Bangalore",
    availableNow: false,
    nextAvailable: "Today at 8:00 PM",
    totalStudents: 356
  }
];

// Recent Questions/Answers for social proof
const RECENT_QA = [
  {
    id: 1,
    student: "Rahul K.",
    mentor: "Bhuvan",
    question: "How to revise NCERT Biology for NEET in last 2 months?",
    answer: "Focus on NCERT line by line. Make short notes of diagrams and important points. Practice previous year questions topic-wise.",
    time: "2 hours ago",
    likes: 24
  },
  {
    id: 2,
    student: "Priya S.",
    mentor: "Firoz Alam",
    question: "Best strategy for UPSC Optional subject preparation?",
    answer: "Start with standard books, make concise notes, practice answer writing daily. Focus on previous year question analysis.",
    time: "5 hours ago",
    likes: 18
  },
  {
    id: 3,
    student: "Amit V.",
    mentor: "Harish",
    question: "How to improve speed in JEE Maths?",
    answer: "Practice is key. Solve 10-15 problems daily, focus on shortcuts and formula revision. Time yourself while practicing.",
    time: "1 day ago",
    likes: 31
  },
  {
    id: 4,
    student: "Sneha M.",
    mentor: "Kesar",
    question: "CUET General Test preparation tips?",
    answer: "Focus on current affairs, basic reasoning, and general knowledge. Practice mock tests regularly to improve speed.",
    time: "1 day ago",
    likes: 15
  },
  {
    id: 5,
    student: "Rohit P.",
    mentor: "Shikhar Bhiya",
    question: "How to prepare for Google/Amazon coding rounds?",
    answer: "Master DSA fundamentals first. Solve LeetCode medium problems daily. Focus on time complexity optimization.",
    time: "2 days ago",
    likes: 42
  }
];

const EXAM_CATEGORIES = [
  { name: "IIT-JEE", icon: "🎓", color: "from-blue-500 to-blue-600" },
  { name: "NEET", icon: "⚕️", color: "from-green-500 to-green-600" },
  { name: "UPSC", icon: "🏛️", color: "from-purple-500 to-purple-600" },
  { name: "CUET", icon: "📚", color: "from-pink-500 to-pink-600" },
  { name: "Coding", icon: "💻", color: "from-indigo-500 to-indigo-600" },
  { name: "Counseling", icon: "💡", color: "from-yellow-500 to-yellow-600" }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [searchQuery, setSearchQuery] = useState('');
  const [visitorCount, setVisitorCount] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [filters, setFilters] = useState({
    exam: 'all',
    priceRange: [0, 1000],
    minRating: 0,
    minExperience: 0,
    availableNow: false
  });

  // Simulate visitor counter and active users
  useEffect(() => {
    // Load initial visitor count (simulated)
    const initialCount = 1247;
    setVisitorCount(initialCount);
    
    // Simulate active users
    const initialActive = Math.floor(Math.random() * 30) + 15;
    setActiveUsers(initialActive);

    // Increment visitor count
    const countInterval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 10000); // Every 10 seconds

    // Update active users randomly
    const activeInterval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * 30) + 15);
    }, 15000); // Every 15 seconds

    return () => {
      clearInterval(countInterval);
      clearInterval(activeInterval);
    };
  }, []);

  const filteredMentors = MOCK_MENTORS.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.exam.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExam = filters.exam === 'all' || mentor.exam === filters.exam;
    const matchesPrice = mentor.monthlyPrice >= filters.priceRange[0] && mentor.monthlyPrice <= filters.priceRange[1];
    const matchesRating = mentor.rating >= filters.minRating;
    const matchesExperience = mentor.experience >= filters.minExperience;
    const matchesAvailability = !filters.availableNow || mentor.availableNow;
    
    return matchesSearch && matchesExam && matchesPrice && matchesRating && matchesExperience && matchesAvailability;
  });

  const NotifyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bell className="text-blue-600" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Mentor Currently Unavailable</h2>
          <p className="text-gray-600">
            {selectedMentor?.name} will be available {selectedMentor?.nextAvailable}
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => {
              alert(`✅ You'll get notified when ${selectedMentor?.name} is available!`);
              setShowNotifyModal(false);
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
          >
            <Bell size={20} />
            <span>Notify Me When Available</span>
          </button>
          
          <button
            onClick={() => setShowNotifyModal(false)}
            className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
          >
            Close
          </button>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700 text-center">
            💬 <strong>Quick Tip:</strong> Subscribe to monthly plan for priority access anytime!
          </p>
        </div>
      </div>
    </div>
  );

  const AuthModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold mb-6">{authMode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={() => {
            setUser({ name: "Demo User", email: "demo@example.com", role: "mentee" });
            setShowAuthModal(false);
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          {authMode === 'login' ? 'Sign In' : 'Sign Up'}
        </button>
        <div className="mt-4 text-center">
          <button
            onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
            className="text-blue-600 hover:underline"
          >
            {authMode === 'login' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
        <button
          onClick={() => setShowAuthModal(false)}
          className="mt-4 w-full text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );

  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Award className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MentorConnect
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-blue-600 font-medium transition">Home</button>
            <button onClick={() => setCurrentPage('mentors')} className="text-gray-700 hover:text-blue-600 font-medium transition">Find Mentors</button>
            <button className="text-gray-700 hover:text-blue-600 font-medium transition">How it Works</button>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <button
                  onClick={() => setCurrentPage('dashboard')}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  <User size={20} />
                  <span className="hidden sm:inline">{user.name}</span>
                </button>
                <button
                  onClick={() => setUser(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setAuthMode('login');
                    setShowAuthModal(true);
                  }}
                  className="px-6 py-2 text-gray-700 hover:text-blue-600 font-medium transition"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setAuthMode('signup');
                    setShowAuthModal(true);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Social Proof Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Eye size={18} />
              <span><strong>{visitorCount.toLocaleString()}</strong> total visits</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span><strong>{activeUsers}</strong> users online now</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={18} />
              <span><strong>1,639+</strong> students helped</span>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect Mentor to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Crack Your Dream Exam
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Connect with expert mentors who have successfully cleared IIT-JEE, NEET, UPSC, CUET and more. 
            Get personalized guidance with affordable pricing starting from just ₹25!
          </p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-center bg-white rounded-full shadow-lg px-6 py-4">
              <Search className="text-gray-400 mr-3" size={24} />
              <input
                type="text"
                placeholder="Search for mentors by exam (e.g., UPSC, IIT-JEE, NEET)..."
                className="flex-1 outline-none text-lg"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage('mentors');
                }}
              />
              <button
                onClick={() => setCurrentPage('mentors')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Search
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-20">
            {EXAM_CATEGORIES.map((exam, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setFilters({ ...filters, exam: exam.name });
                  setCurrentPage('mentors');
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`text-3xl mb-3 bg-gradient-to-r ${exam.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto`}>
                  {exam.icon}
                </div>
                <h3 className="font-bold text-sm text-gray-900">{exam.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Questions Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recent Questions & Answers</h2>
            <p className="text-gray-600 text-lg">See what other students are asking our mentors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECENT_QA.slice(0, 6).map((qa) => (
              <div key={qa.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <MessageSquare size={18} className="text-blue-600" />
                    <span className="text-sm font-semibold text-gray-900">{qa.student}</span>
                  </div>
                  <span className="text-xs text-gray-500">{qa.time}</span>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3">{qa.question}</h4>
                
                <div className="bg-white rounded-lg p-4 mb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{qa.mentor[0]}</span>
                    </div>
                    <span className="text-sm font-semibold text-blue-600">{qa.mentor}</span>
                  </div>
                  <p className="text-sm text-gray-700">{qa.answer}</p>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <span>👍</span>
                    <span>{qa.likes} helpful</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Search, title: "Find Your Mentor", desc: "Browse through our verified mentors who have cracked your target exam" },
              { icon: Calendar, title: "Check Availability", desc: "See real-time availability or get notified when mentor is free" },
              { icon: TrendingUp, title: "Get Expert Guidance", desc: "Receive proven strategies, tips, and personalized guidance to ace your exam" }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of students who have achieved their dreams with expert guidance</p>
          <button
            onClick={() => setCurrentPage('mentors')}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Find Your Mentor Now
          </button>
        </div>
      </section>
    </div>
  );

  const MentorCard = ({ mentor }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-20 h-20 rounded-full border-4 border-blue-100 object-cover"
            />
            {mentor.availableNow && (
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl text-gray-900">{mentor.name}</h3>
            <p className="text-blue-600 font-semibold text-sm">{mentor.specialization}</p>
            <p className="text-gray-600 text-xs mt-1">{mentor.college}</p>
            <div className="flex items-center mt-2 space-x-3 text-xs text-gray-600">
              <span className="flex items-center">
                <Clock size={12} className="mr-1" />
                {mentor.experience} Yrs
              </span>
              <span className="flex items-center">
                <Star size={12} className="mr-1 fill-yellow-400 text-yellow-400" />
                {mentor.rating} ({mentor.reviews})
              </span>
              <span className="flex items-center">
                <Users size={12} className="mr-1" />
                {mentor.totalStudents}+ students
              </span>
            </div>
          </div>
        </div>

        {mentor.availableNow ? (
          <div className="mb-4 px-3 py-2 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-green-700">Available Now</span>
          </div>
        ) : (
          <div className="mb-4 px-3 py-2 bg-orange-50 border border-orange-200 rounded-lg">
            <span className="text-sm text-orange-700">Next available: {mentor.nextAvailable}</span>
          </div>
        )}

        <p className="text-gray-700 mb-4 text-sm line-clamp-2">{mentor.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.expertise.slice(0, 2).map((skill, idx) => (
            <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Quick Chat (10 min)</span>
            <span className="font-bold text-gray-900">₹{mentor.price10min}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Session (45 min)</span>
            <span className="font-bold text-gray-900">₹{mentor.price45min}</span>
          </div>
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-lg">
            <span className="text-sm font-semibold text-gray-900 flex items-center">
              <Crown size={14} className="mr-1 text-yellow-500" />
              Monthly Plan
            </span>
            <span className="font-bold text-blue-600">₹{mentor.monthlyPrice}/mo</span>
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedMentor(mentor);
            setCurrentPage('mentor-profile');
          }}
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          View Profile
        </button>
      </div>
    </div>
  );

  const MentorsPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Eye size={18} />
              <span><strong>{visitorCount.toLocaleString()}</strong> visits</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span><strong>{activeUsers}</strong> online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Find Your Perfect Mentor</h1>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter size={20} />
                <h2 className="font-bold text-lg">Filters</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.availableNow}
                      onChange={(e) => setFilters({ ...filters, availableNow: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm font-semibold flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Available Now
                    </span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Exam</label>
                  <select
                    value={filters.exam}
                    onChange={(e) => setFilters({ ...filters, exam: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Exams</option>
                    {EXAM_CATEGORIES.map(exam => (
                      <option key={exam.name} value={exam.name}>{exam.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Monthly Price: ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Minimum Rating</label>
                  <select
                    value={filters.minRating}
                    onChange={(e) => setFilters({ ...filters, minRating: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="0">All Ratings</option>
                    <option value="4.5">4.5+ Stars</option>
                    <option value="4.7">4.7+ Stars</option>
                    <option value="4.9">4.9+ Stars</option>
                  </select>
                </div>

                <button
                  onClick={() => setFilters({ exam: 'all', priceRange: [0, 1000], minRating: 0, minExperience: 0, availableNow: false })}
                  className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="mb-6 text-gray-600">
              Showing {filteredMentors.length} mentor{filteredMentors.length !== 1 ? 's' : ''}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map(mentor => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
            {filteredMentors.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No mentors found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const MentorProfilePage = () => {
    if (!selectedMentor) return null;

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setCurrentPage('mentors')}
            className="mb-6 text-blue-600 hover:underline flex items-center"
          >
            ← Back to Mentors
          </button>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <img
                    src={selectedMentor.image}
                    alt={selectedMentor.name}
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                  />
                  {selectedMentor.availableNow && (
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{selectedMentor.name}</h1>
                  <p className="text-xl mb-1">{selectedMentor.specialization}</p>
                  <p className="text-blue-100 mb-3">{selectedMentor.college}</p>
                  <div className="flex items-center space-x-6 text-blue-100 flex-wrap">
                    <span className="flex items-center">
                      <Clock size={18} className="mr-2" />
                      {selectedMentor.experience} Years
                    </span>
                    <span className="flex items-center">
                      <Star size={18} className="mr-2 fill-yellow-400 text-yellow-400" />
                      {selectedMentor.rating} ({selectedMentor.reviews})
                    </span>
                    <span className="flex items-center">
                      <CheckCircle size={18} className="mr-2" />
                      {selectedMentor.sessions}+ Sessions
                    </span>
                    <span className="flex items-center">
                      <Users size={18} className="mr-2" />
                      {selectedMentor.totalStudents}+ Students
                    </span>
                  </div>
                  
                  {selectedMentor.availableNow ? (
                    <div className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-green-500 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="font-semibold">Available Now</span>
                    </div>
                  ) : (
                    <div className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full">
                      <Clock size={16} />
                      <span className="text-sm">Next available: {selectedMentor.nextAvailable}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700 leading-relaxed">{selectedMentor.about}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">My Expertise</h2>
                    <div className="flex flex-wrap gap-3">
                      {selectedMentor.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Student Questions & My Answers</h2>
                    <div className="space-y-4">
                      {RECENT_QA.filter(qa => qa.mentor === selectedMentor.name).map((qa) => (
                        <div key={qa.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900">{qa.student} asked:</span>
                            <span className="text-xs text-gray-500">{qa.time}</span>
                          </div>
                          <p className="text-gray-700 mb-3 font-medium">{qa.question}</p>
                          <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                            <p className="text-sm text-gray-700">{qa.answer}</p>
                          </div>
                          <div className="mt-2 text-sm text-gray-600">
                            👍 {qa.likes} students found this helpful
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Reviews & Testimonials</h2>
                    <div className="space-y-4">
                      {[
                        { name: "Rahul K.", rating: 5, text: "Excellent mentor! Very helpful and patient. Cleared all my doubts." },
                        { name: "Sneha M.", rating: 5, text: "Great guidance and support. Worth every rupee. Highly recommended!" }
                      ].map((review, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">{review.name}</span>
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sticky top-24">
                    <h3 className="text-2xl font-bold mb-6">Choose Your Plan</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="bg-white rounded-lg p-4 hover:border-2 hover:border-blue-300 cursor-pointer transition">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Zap size={18} className="text-blue-600" />
                            <span className="font-semibold">Quick Chat</span>
                          </div>
                          <span className="text-xl font-bold text-blue-600">₹{selectedMentor.price10min}</span>
                        </div>
                        <p className="text-sm text-gray-600">10 minutes - Quick doubts & guidance</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 hover:border-2 hover:border-blue-300 cursor-pointer transition">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Clock size={18} className="text-blue-600" />
                            <span className="font-semibold">Single Session</span>
                          </div>
                          <span className="text-xl font-bold text-blue-600">₹{selectedMentor.price45min}</span>
                        </div>
                        <p className="text-sm text-gray-600">45 minutes - Detailed guidance</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-lg text-gray-900">
                          BEST VALUE
                        </div>
                        <div className="flex items-center justify-between mb-2 mt-2">
                          <div className="flex items-center space-x-2">
                            <Crown size={20} className="text-yellow-300" />
                            <span className="font-semibold">Monthly Plan</span>
                          </div>
                          <span className="text-2xl font-bold">₹{selectedMentor.monthlyPrice}</span>
                        </div>
                        <p className="text-sm text-blue-100 mb-3">Unlimited guidance for 30 days</p>
                        <ul className="text-xs space-y-1 text-blue-50">
                          <li>• Ask unlimited questions anytime</li>
                          <li>• Priority response within 24 hours</li>
                          <li>• Study plan & resources included</li>
                          <li>• Weekly progress review calls</li>
                        </ul>
                      </div>
                    </div>

                    {selectedMentor.availableNow ? (
                      <button
                        onClick={() => {
                          if (user) {
                            alert('✅ Booking confirmed! Payment gateway integration coming soon (Razorpay/Stripe).');
                          } else {
                            setShowAuthModal(true);
                          }
                        }}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all mb-4 flex items-center justify-center space-x-2"
                      >
                        <Video size={20} />
                        <span>Book Now</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowNotifyModal(true)}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all mb-4 flex items-center justify-center space-x-2"
                      >
                        <Bell size={20} />
                        <span>Notify Me When Available</span>
                      </button>
                    )}

                    <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center space-x-2">
                      <MessageCircle size={20} />
                      <span>Message Mentor</span>
                    </button>

                    <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-xs text-center text-gray-700">
                        💰 <strong>Affordable Pricing:</strong> Starting at just ₹{selectedMentor.price10min}!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DashboardPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">My Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-600">Upcoming Sessions</h3>
              <Calendar className="text-blue-600" size={24} />
            </div>
            <p className="text-4xl font-bold text-gray-900">3</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-600">Active Subscriptions</h3>
              <Crown className="text-yellow-600" size={24} />
            </div>
            <p className="text-4xl font-bold text-gray-900">2</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-600">Total Sessions</h3>
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <p className="text-4xl font-bold text-gray-900">18</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">My Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={user?.name || ''}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Target Exam</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option>Select your target exam</option>
                  <option>IIT-JEE</option>
                  <option>NEET</option>
                  <option>UPSC</option>
                  <option>CUET</option>
                  <option>Coding Interviews</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Active Subscriptions</h2>
              <div className="space-y-4">
                {[
                  { mentor: "Bhuvan", exam: "NEET", expires: "Dec 15, 2024", price: 699 },
                  { mentor: "Harish", exam: "IIT-JEE", expires: "Dec 20, 2024", price: 799 }
                ].map((sub, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{sub.mentor}</h4>
                        <p className="text-sm text-gray-600">{sub.exam} Monthly Plan - ₹{sub.price}/mo</p>
                        <p className="text-xs text-gray-500 mt-1">Expires: {sub.expires}</p>
                      </div>
                      <Crown className="text-yellow-500" size={24} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Upcoming Sessions</h2>
              <div className="space-y-4">
                {[
                  { mentor: "Firoz Alam", date: "Nov 2, 2024", time: "10:00 AM", type: "45 min", price: 180 },
                  { mentor: "Kesar", date: "Nov 5, 2024", time: "2:00 PM", type: "10 min", price: 25 }
                ].map((session, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{session.mentor}</h4>
                        <p className="text-sm text-gray-600">{session.date} at {session.time}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                            {session.type}
                          </span>
                          <span className="text-xs font-semibold text-gray-900">₹{session.price}</span>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                        Join
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      {showAuthModal && <AuthModal />}
      {showNotifyModal && <NotifyModal />}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'mentors' && <MentorsPage />}
      {currentPage === 'mentor-profile' && <MentorProfilePage />}
      {currentPage === 'dashboard' && <DashboardPage />}
    </div>
  );
};

export default App;