import React, { useState, useEffect, useMemo } from 'react';
import { SplashScreen } from './components/auth/SplashScreen';
import { LoginScreen } from './components/auth/LoginScreen';
import { TopBar } from './components/layout/TopBar';
import { Sidebar } from './components/layout/Sidebar';
import { MainMenuView } from './components/views/MainMenuView';
import { StatisticsView } from './components/views/StatisticsView';
import { ProjectsView } from './components/views/ProjectsView';
import { CreateProjectView } from './components/views/CreateProjectView';
import { ProjectDetailView } from './components/views/ProjectDetailView';
import { ClientsView } from './components/views/ClientsView';
import { SearchResultsView } from './components/views/SearchResultsView';
import { SettingsView } from './components/views/SettingsView';
import { useAuth } from './hooks/useAuth';
import { useData } from './hooks/useData';
import { ViewType } from './types';

function App() {
  const { authLoading, authError, currentUser, showSplash, setShowSplash, resetSent, handleLogin, handleForgotPassword, handleLogout } = useAuth();
  const { clients, projects, loadingData, createClient, createProject, updateProject, deleteProject } = useData(currentUser);

  // VIEW STATES
  const [view, setView] = useState<ViewType>("menu");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("todos");

  // SEARCH STATE
  const [globalSearchTerm, setGlobalSearchTerm] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const isAdmin = currentUser?.role === "admin";
  const selectedProject = useMemo(() => projects.find((p) => p.id === selectedProjectId) || null, [projects, selectedProjectId]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setGlobalSearchTerm("");
    if (window.innerWidth < 768) {
      setView('menu');
    } else {
      setView('stats');
    }
  };

  // Desktop: Switch to stats view on load
  useEffect(() => {
    if (window.innerWidth >= 768 && view === 'menu') {
      setView('stats');
    }
  }, [view]);

  // Search results
  const searchResults = useMemo(() => {
    if (!globalSearchTerm) return { projects: [], clients: [] };
    const lower = globalSearchTerm.toLowerCase();

    const matchedProjects = projects.filter(p => {
      const cName = clients.find(c => c.id === p.clientId)?.name || "";
      return p.title.toLowerCase().includes(lower) || cName.toLowerCase().includes(lower);
    });

    const matchedClients = clients.filter(c =>
      c.name.toLowerCase().includes(lower) ||
      c.email.toLowerCase().includes(lower) ||
      (c.nif && c.nif.includes(lower))
    );

    return { projects: matchedProjects, clients: matchedClients };
  }, [globalSearchTerm, projects, clients]);

  // Show search results when searching
  useEffect(() => {
    if (globalSearchTerm && searchResults.projects.length + searchResults.clients.length > 0) {
      setView('search-results');
    }
  }, [globalSearchTerm, searchResults]);

  if (authLoading) return <div className="min-h-screen bg-black" />;
  if (!currentUser) return <LoginScreen loading={authLoading} error={authError} resetSent={resetSent} onLogin={handleLogin} onForgotPassword={handleForgotPassword} />;
  if (showSplash) return <SplashScreen onComplete={() => setShowSplash(false)} />;

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans text-slate-900">
      <Sidebar
        view={view}
        currentUser={currentUser}
        setView={setView}
        setGlobalSearchTerm={setGlobalSearchTerm}
        handleLogout={handleLogout}
        handleLogoClick={handleLogoClick}
      />
      
      <main className="flex-1 w-full bg-[#f8fafc] min-h-screen md:ml-64 transition-all flex flex-col">
        <TopBar 
          currentUser={currentUser}
          isAdmin={isAdmin}
          globalSearchTerm={globalSearchTerm}
          setGlobalSearchTerm={setGlobalSearchTerm}
          isSearchExpanded={isSearchExpanded}
          setIsSearchExpanded={setIsSearchExpanded}
          setView={setView}
          handleLogoClick={handleLogoClick}
        />

        <div className="flex-1 relative">
          {loadingData && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500/20 overflow-hidden z-[100]">
              <div className="w-1/3 h-full bg-orange-500 animate-slide"></div>
            </div>
          )}

          {view === "menu" && <MainMenuView setView={setView} setFilterStatus={setFilterStatus} />}
          {view === "stats" && <StatisticsView currentUser={currentUser} projects={projects} clients={clients} setView={setView} />}
          {view === "projects" && (
            <ProjectsView 
              projects={projects}
              clients={clients}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              setView={setView}
              setSelectedProjectId={setSelectedProjectId}
            />
          )}
          {view === "create-project" && (
            <CreateProjectView 
              clients={clients}
              createProject={createProject}
              setView={setView}
              setSelectedProjectId={setSelectedProjectId}
            />
          )}
          {view === "project-detail" && (
            <ProjectDetailView 
              selectedProject={selectedProject}
              clients={clients}
              currentUser={currentUser}
              isAdmin={isAdmin}
              updateProject={updateProject}
              deleteProject={deleteProject}
              setView={setView}
            />
          )}
          {view === "clients" && <ClientsView clients={clients} createClient={createClient} setView={setView} />}
          {view === "settings" && <SettingsView currentUser={currentUser} setView={setView} />}
          {view === "search-results" && (
            <SearchResultsView 
              searchResults={searchResults}
              clients={clients}
              setSelectedProjectId={setSelectedProjectId}
              setView={setView}
              setGlobalSearchTerm={setGlobalSearchTerm}
            />
          )}
        </div>
      </main>

      <style>{`
        @keyframes slide { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }
        .animate-slide { animation: slide 1.5s infinite linear; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media print {
          body * { visibility: hidden; }
          .print\\:block, .print\\:block * { visibility: visible; }
          .print\\:block { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default App;
