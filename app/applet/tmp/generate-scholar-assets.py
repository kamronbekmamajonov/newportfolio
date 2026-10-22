import os

# Create HTML for scholar-before.jpg
html_before = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif; -webkit-font-smoothing: antialiased; }
body { width: 540px; height: 960px; background: #fff; padding: 24px 24px; color: #000; overflow: hidden; }
.status-bar { display: flex; justify-content: space-between; font-size: 14px; font-weight: 600; color: #555; margin-bottom: 16px; }
.top-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.account-name { font-size: 20px; font-weight: 700; }
.profile-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.avatar { width: 90px; height: 90px; border-radius: 50%; background: #0A192F; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; border: 2px solid #E2E8F0; }
.avatar-title { font-size: 14px; font-weight: 800; }
.avatar-sub { font-size: 8px; color: #E53E3E; font-weight: 700; }
.stats { display: flex; gap: 32px; text-align: center; }
.stat-val { font-size: 20px; font-weight: 800; display: block; }
.stat-lbl { font-size: 13px; color: #4B5563; }
.bio { font-size: 14px; line-height: 1.45; margin-bottom: 20px; }
.bio-name { font-weight: 700; font-size: 15px; margin-bottom: 3px; }
.bio-cat { color: #2563EB; font-weight: 600; margin-bottom: 6px; font-size: 13px; }
.link { color: #00376B; font-weight: 600; }
.btn-row { display: flex; gap: 8px; margin-bottom: 24px; }
.btn { flex: 1; padding: 9px; background: #EFEFEF; border-radius: 8px; text-align: center; font-size: 13px; font-weight: 600; }
.highlights { display: flex; gap: 20px; margin-bottom: 20px; }
.hl-item { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.hl-circle { width: 62px; height: 62px; border-radius: 50%; background: #F8FAFC; border: 1px solid #CBD5E1; display: flex; align-items: center; justify-content: center; font-size: 22px; }
.hl-title { font-size: 11px; font-weight: 500; }
.before-badge { display: inline-block; padding: 6px 14px; border-radius: 9999px; background: #FEE2E2; color: #991B1B; font-size: 13px; font-weight: 700; margin-bottom: 12px; }
</style>
</head>
<body>
<div class="status-bar"><span>Нет SIM</span><span>14:52</span><span>33% 🔋</span></div>
<div class="top-nav"><span style="font-size:24px;">‹</span><span class="account-name">scholarhub.sat</span><span>🔔 •••</span></div>
<span class="before-badge">BOSHLANG'ICH HOLAT (BEFORE)</span>
<div class="profile-header">
  <div class="avatar"><span class="avatar-title">Scholar</span><span class="avatar-sub">Road to Hub</span></div>
  <div class="stats">
    <div><span class="stat-val">26</span><span class="stat-lbl">publikatsii</span></div>
    <div><span class="stat-val" style="color:#DC2626;">2 741</span><span class="stat-lbl">podpischiki</span></div>
    <div><span class="stat-val">1</span><span class="stat-lbl">podpiski</span></div>
  </div>
</div>
<div class="bio">
  <div class="bio-name">Scholar Hub - Onlayn ta'lim platformasi</div>
  <div class="bio-cat">Obrazovanie</div>
  <div>💻 100+ Online SAT darslar, 1000+ test savollar</div>
  <div>🏆 100+ to'liq grantda o'qiyotgan studentlar</div>
  <div>📚 Yale, Cornell, Brown, Rice, Duke & more</div>
  <div>📞 +998787771020</div>
  <div class="link">🔗 bit.ly/4gDWW8i va yana 1</div>
</div>
<div class="btn-row">
  <div class="btn">Obuna bo'lingan</div>
  <div class="btn">Xabar</div>
  <div class="btn">Qo'ng'iroq</div>
</div>
<div class="highlights">
  <div class="hl-item"><div class="hl-circle">📝</div><span class="hl-title">SAT</span></div>
  <div class="hl-item"><div class="hl-circle">📊</div><span class="hl-title">SAT results</span></div>
  <div class="hl-item"><div class="hl-circle">🎓</div><span class="hl-title">Studentlar</span></div>
  <div class="hl-item"><div class="hl-circle">🎯</div><span class="hl-title">Nega Schol...</span></div>
</div>
</body>
</html>
"""

# Create HTML for scholar-after.jpg
html_after = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif; -webkit-font-smoothing: antialiased; }
body { width: 540px; height: 960px; background: #fff; padding: 24px 24px; color: #000; overflow: hidden; }
.status-bar { display: flex; justify-content: space-between; font-size: 14px; font-weight: 600; color: #555; margin-bottom: 16px; }
.top-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.account-name { font-size: 20px; font-weight: 700; }
.profile-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.avatar { width: 90px; height: 90px; border-radius: 50%; background: #0A192F; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; border: 2px solid #2563EB; box-shadow: 0 4px 12px rgba(37,99,235,0.2); }
.avatar-title { font-size: 14px; font-weight: 800; }
.avatar-sub { font-size: 8px; color: #E53E3E; font-weight: 700; }
.stats { display: flex; gap: 32px; text-align: center; }
.stat-val { font-size: 20px; font-weight: 800; display: block; }
.stat-lbl { font-size: 13px; color: #4B5563; }
.bio { font-size: 14px; line-height: 1.45; margin-bottom: 20px; }
.bio-name { font-weight: 700; font-size: 15px; margin-bottom: 3px; }
.bio-cat { color: #2563EB; font-weight: 600; margin-bottom: 6px; font-size: 13px; }
.link { color: #00376B; font-weight: 600; }
.btn-row { display: flex; gap: 8px; margin-bottom: 24px; }
.btn { flex: 1; padding: 9px; background: #EFEFEF; border-radius: 8px; text-align: center; font-size: 13px; font-weight: 600; }
.highlights { display: flex; gap: 20px; margin-bottom: 20px; }
.hl-item { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.hl-circle { width: 62px; height: 62px; border-radius: 50%; background: #EFF6FF; border: 2px solid #3B82F6; display: flex; align-items: center; justify-content: center; font-size: 22px; }
.hl-title { font-size: 11px; font-weight: 600; color: #1E3A8A; }
.after-badge { display: inline-block; padding: 6px 14px; border-radius: 9999px; background: #DCFCE7; color: #166534; font-size: 13px; font-weight: 700; margin-bottom: 12px; }
</style>
</head>
<body>
<div class="status-bar"><span>12:05</span><span>scholarhub.sat</span><span>10% 🔋</span></div>
<div class="top-nav"><span style="font-size:24px;">‹</span><span class="account-name">scholarhub.sat</span><span>🔔 •••</span></div>
<span class="after-badge">NATIJA (AFTER) · 5 OYDA +22 200</span>
<div class="profile-header">
  <div class="avatar"><span class="avatar-title">Scholar</span><span class="avatar-sub">Road to Hub</span></div>
  <div class="stats">
    <div><span class="stat-val">82</span><span class="stat-lbl">publikatsii</span></div>
    <div><span class="stat-val" style="color:#2563EB; font-size:22px;">24,5 ming</span><span class="stat-lbl">podpischiki</span></div>
    <div><span class="stat-val">0</span><span class="stat-lbl">podpiski</span></div>
  </div>
</div>
<div class="bio">
  <div class="bio-name">Scholar Hub - Onlayn ta'lim platformasi</div>
  <div class="bio-cat">Obrazovanie</div>
  <div>💻 100+ Online SAT darslar, 1000+ test savollar</div>
  <div>🏆 100+ to'liq grantda o'qiyotgan studentlar</div>
  <div>📚 Yale, Cornell, Brown, Rice, Duke & more</div>
  <div>📞 +998787771020</div>
  <div class="link">🔗 bit.ly/4gDWW8i va yana 1</div>
</div>
<div class="btn-row">
  <div class="btn">Obuna bo'lingan</div>
  <div class="btn">Xabar</div>
  <div class="btn">Qo'ng'iroq</div>
</div>
<div class="highlights">
  <div class="hl-item"><div class="hl-circle">💡</div><span class="hl-title">Q&A</span></div>
  <div class="hl-item"><div class="hl-circle">📝</div><span class="hl-title">SAT</span></div>
  <div class="hl-item"><div class="hl-circle">🏆</div><span class="hl-title">Results</span></div>
  <div class="hl-item"><div class="hl-circle">🎓</div><span class="hl-title">Studentlar</span></div>
  <div class="hl-item"><div class="hl-circle">🎯</div><span class="hl-title">Nega Sch...</span></div>
</div>
</body>
</html>
"""

# Create HTML for lidmagnit-reel-2.jpg
html_lidmagnit = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif; -webkit-font-smoothing: antialiased; }
body { width: 540px; height: 1100px; background: #fff; padding: 32px 28px; color: #000; overflow: hidden; }
.header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; font-size: 20px; font-weight: 700; }
.thumb-card { width: 220px; height: 320px; margin: 0 auto 20px; border-radius: 16px; background: radial-gradient(circle, #e2e8f0 0%, #cbd5e1 100%); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.thumb-tag { position: absolute; top: 120px; background: rgba(225, 29, 72, 0.9); color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 800; }
.thumb-student { font-size: 80px; }
.title { font-size: 20px; font-weight: 800; text-align: center; margin-bottom: 4px; }
.date { font-size: 13px; color: #64748B; text-align: center; margin-bottom: 24px; }
.stats-row { display: flex; justify-content: space-around; margin-bottom: 24px; padding: 12px 0; border-top: 1px solid #E2E8F0; border-bottom: 1px solid #E2E8F0; }
.stat-box { text-align: center; }
.stat-icon { font-size: 20px; display: block; margin-bottom: 4px; }
.stat-num { font-size: 16px; font-weight: 700; }
.notice { font-size: 11px; color: #94A3B8; text-align: center; margin-bottom: 28px; line-height: 1.4; }
.section-title { font-size: 22px; font-weight: 800; margin-bottom: 18px; }
.metric-row { display: flex; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid #F1F5F9; font-size: 16px; }
.metric-val { font-weight: 800; font-size: 18px; }
</style>
</head>
<body>
<div class="header"><span>‹</span><span>Статистика видео Reels</span><span>•••</span></div>
<div class="thumb-card">
  <div class="thumb-tag">$256.000 grant yutib oldim</div>
  <div class="thumb-student">🧑‍🎓</div>
</div>
<div class="title">Qanday qilib $256.000 to'liq grant yutib oldim?</div>
<div class="date">12 noyabr 2024 y. · Davomiyligi 0:46 · VSL / Lead Magnet</div>
<div class="stats-row">
  <div class="stat-box"><span class="stat-icon">▶</span><span class="stat-num">66 ming</span></div>
  <div class="stat-box"><span class="stat-icon">❤️</span><span class="stat-num">2,1 ming</span></div>
  <div class="stat-box"><span class="stat-icon">💬</span><span class="stat-num" style="color:#2563EB;">3,6 ming</span></div>
  <div class="stat-box"><span class="stat-icon">↗</span><span class="stat-num">415</span></div>
  <div class="stat-box"><span class="stat-icon">🔖</span><span class="stat-num">315</span></div>
</div>
<div class="notice">Statistika Facebook va Instagram reklama instrumentlari hamda organik qamrovni o'z ichiga oladi.</div>
<div class="section-title">Umumiy ko'rsatkichlar (Обзор)</div>
<div class="metric-row"><span>Qamrov (Охват)</span><span class="metric-val">64,205</span></div>
<div class="metric-row"><span>Reels bilan o'zaro ta'sir</span><span class="metric-val">6,342</span></div>
<div class="metric-row"><span>Profilga o'tish harakatlari</span><span class="metric-val" style="color:#2563EB;">482</span></div>
<div class="metric-row"><span>ChatPlace orqali jalb qilinganlar</span><span class="metric-val">~4 000 kishi</span></div>
</body>
</html>
"""

# Create HTML for sotuv-otzivi.jpg
html_sotuv = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif; -webkit-font-smoothing: antialiased; }
body { width: 540px; height: 960px; background: #0E1621; color: #fff; padding: 24px 20px; overflow: hidden; }
.header { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #1C2733; padding-bottom: 14px; margin-bottom: 20px; }
.chat-title { text-align: center; }
.chat-name { font-size: 17px; font-weight: 700; }
.chat-sub { font-size: 12px; color: #6C7883; }
.pin-banner { background: #17212B; border-left: 2px solid #2B5278; padding: 10px 14px; border-radius: 8px; font-size: 13px; color: #64B5F6; margin-bottom: 30px; }
.vsl-preview { width: 340px; height: 260px; margin: 0 auto 24px; border-radius: 16px; background: #17212B; border: 1px solid #2B5278; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; }
.play-btn { width: 56px; height: 56px; border-radius: 50%; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; font-size: 24px; }
.time-tag { position: absolute; bottom: 8px; right: 10px; font-size: 11px; color: #82868A; }
.msg-bubble { background: #182533; border-radius: 14px; padding: 14px 16px; max-width: 440px; margin: 0 auto 14px; line-height: 1.45; }
.msg-text { font-size: 15px; font-weight: 500; color: #E5E7EB; }
.msg-time { text-align: right; font-size: 11px; color: #6C7883; margin-top: 4px; }
.highlight { color: #60A5FA; font-weight: 700; }
.reactions { display: flex; gap: 6px; margin-top: 8px; }
.react-pill { background: #242F3D; padding: 4px 10px; border-radius: 9999px; font-size: 12px; }
</style>
</head>
<body>
<div class="header"><span>‹ Orqaga</span><div class="chat-title"><div class="chat-name">General</div><div class="chat-sub">989 xabar</div></div><span>#</span></div>
<div class="pin-banner">📌 Biriktirilgan xabar #3: docs.google.com/spreadsheets/d/1ggsM...</div>
<div class="vsl-preview">
  <div style="font-size:14px; font-weight:700; color:#93C5FD; margin-bottom:12px;">ScholarHUB — VSL Video Materiali</div>
  <div class="play-btn">▶</div>
  <div class="time-tag">01:29</div>
</div>
<div class="msg-bubble">
  <div class="msg-text">kecha <span class="highlight">175 ta</span> vsl ni o'zidan lid kelibdi</div>
  <div class="msg-time">01:32</div>
</div>
<div class="msg-bubble">
  <div class="msg-text">hozircha bog'langanlardan <span class="highlight">46% kachestvinni</span>, <span class="highlight">4 tasi goryachida</span>, super</div>
  <div class="reactions"><span class="react-pill">⚡</span><span class="react-pill">💙 M</span></div>
  <div class="msg-time">01:34</div>
</div>
</body>
</html>
"""

# Create HTML for scholar-process.jpg
html_process = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif; }
body { width: 540px; height: 720px; background: #0F172A; color: #fff; padding: 24px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; }
.header { border-bottom: 1px solid #1E293B; padding-bottom: 12px; }
.badge { display: inline-block; padding: 4px 10px; border-radius: 6px; background: #3B82F6; color: #fff; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; }
.title { font-size: 20px; font-weight: 800; }
.studio-box { height: 480px; border-radius: 16px; background: radial-gradient(circle at 50% 40%, #1e293b 0%, #090d16 100%); border: 1px solid #334155; position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.softbox { position: absolute; top: 20px; right: 40px; font-size: 40px; opacity: 0.9; }
.board { width: 280px; height: 160px; background: #064e3b; border-radius: 8px; border: 4px solid #78350f; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.5); }
.board-text { font-family: "Courier New", monospace; color: #d1fae5; font-size: 18px; font-weight: bold; }
.instructor { font-size: 70px; margin-top: -10px; }
.gear-row { display: flex; gap: 12px; font-size: 12px; color: #94A3B8; padding-top: 12px; border-top: 1px solid #1E293B; }
</style>
</head>
<body>
<div class="header">
  <span class="badge">Production Jarayoni</span>
  <div class="title">ScholarHUB Studio & Syomka</div>
</div>
<div class="studio-box">
  <div class="softbox">💡 Godox Studio Light</div>
  <div class="board"><div class="board-text">2,500+ Practice Exam</div><div style="font-size:12px; color:#a7f3d0; margin-top:4px;">SAT Preparation System</div></div>
  <div class="instructor">🧑‍🏫</div>
  <div style="font-size:14px; font-weight:700; color:#E2E8F0; margin-top:8px;">Instructor in Studio</div>
</div>
<div class="gear-row">
  <span>🎥 4K Video Production</span>
  <span>🎙️ Simli Lavalier Mikrofon</span>
  <span>📊 Jonli Doska Tahlili</span>
</div>
</body>
</html>
"""

# Create HTML for scholar-visual.jpg
html_visual1 = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif; }
body { width: 540px; height: 860px; background: #fff; padding: 20px; color: #000; overflow: hidden; }
.header { font-size: 18px; font-weight: 700; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E2E8F0; padding-bottom: 12px; }
.badge { font-size: 11px; font-weight: 700; background: #EFF6FF; color: #2563EB; padding: 4px 8px; border-radius: 6px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.cell { aspect-ratio: 9/16; border-radius: 8px; background: #1E293B; color: #fff; padding: 8px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
.cell-title { font-size: 11px; font-weight: 700; line-height: 1.25; }
.cell-views { font-size: 11px; font-weight: 800; color: #60A5FA; display: flex; align-items: center; gap: 3px; }
.viral { border: 2px solid #3B82F6; }
</style>
</head>
<body>
<div class="header"><span>ScholarHUB — Reels Kontent To'plami #1</span><span class="badge">Kontent Tizimi</span></div>
<div class="grid">
  <div class="cell"><div class="cell-title">2024-yil tugamoqda!</div><div class="cell-views">▶ 22,3K</div></div>
  <div class="cell viral" style="background:#0F172A;"><div class="cell-title" style="color:#FBBF24;">Men Amerikada o'qiyman 🇺🇸</div><div class="cell-views" style="color:#34D399;">▶ 582K 🔥</div></div>
  <div class="cell"><div class="cell-title">Farzandim qaysi kasbni tanlaydi?</div><div class="cell-views">▶ 15,5K</div></div>
  <div class="cell"><div class="cell-title">Self Study qilmoqchiman 📚</div><div class="cell-views">▶ 43,6K</div></div>
  <div class="cell"><div class="cell-title">IELTS was enough for HARVARD</div><div class="cell-views">▶ 12,8K</div></div>
  <div class="cell"><div class="cell-title">ScholarHUB consulting emas!</div><div class="cell-views">▶ 12,9K</div></div>
  <div class="cell"><div class="cell-title">Endi to'lashingizni so'raymiz $80K</div><div class="cell-views">▶ 10,8K</div></div>
  <div class="cell"><div class="cell-title">Darslar to'liq ingliz tilida</div><div class="cell-views">▶ 17,8K</div></div>
  <div class="cell"><div class="cell-title">Bilishingiz kerak bo'lgan 3 ta AI</div><div class="cell-views">▶ 48,3K</div></div>
</div>
</body>
</html>
"""

# Create HTML for scholar-visual-2.jpg
html_visual2 = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif; }
body { width: 540px; height: 860px; background: #fff; padding: 20px; color: #000; overflow: hidden; }
.header { font-size: 18px; font-weight: 700; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E2E8F0; padding-bottom: 12px; }
.badge { font-size: 11px; font-weight: 700; background: #DCFCE7; color: #166534; padding: 4px 8px; border-radius: 6px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.cell { aspect-ratio: 9/16; border-radius: 8px; background: #1E293B; color: #fff; padding: 8px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
.cell-title { font-size: 11px; font-weight: 700; line-height: 1.25; }
.cell-views { font-size: 11px; font-weight: 800; color: #60A5FA; display: flex; align-items: center; gap: 3px; }
.viral { border: 2px solid #10B981; }
</style>
</head>
<body>
<div class="header"><span>ScholarHUB — Reels Kontent To'plami #2</span><span class="badge">Viral Rubrikalar</span></div>
<div class="grid">
  <div class="cell"><div class="cell-title">Accepted to Harvard 🎓</div><div class="cell-views">▶ 72,7K</div></div>
  <div class="cell"><div class="cell-title">Feynman texnikasi 💡</div><div class="cell-views">▶ 11,8K</div></div>
  <div class="cell"><div class="cell-title">2025 yilga maqsadlar</div><div class="cell-views">▶ 12,2K</div></div>
  <div class="cell viral" style="background:#0F172A;"><div class="cell-title" style="color:#FBBF24;">Turin grant yutmoqchiman (Squid Game)</div><div class="cell-views" style="color:#34D399;">▶ 606K 🔥</div></div>
  <div class="cell"><div class="cell-title">Turin universitetiga grant</div><div class="cell-views">▶ 10,6K</div></div>
  <div class="cell"><div class="cell-title">Future 2024 vs 2030</div><div class="cell-views">▶ 12,3K</div></div>
  <div class="cell"><div class="cell-title">O'qishingiz uchun qancha xarajat?</div><div class="cell-views">▶ 15K</div></div>
  <div class="cell viral"><div class="cell-title">Hali ham orzu qilyapsizmi?</div><div class="cell-views" style="color:#34D399;">▶ 240K 🔥</div></div>
  <div class="cell"><div class="cell-title">Oldin faqat IELTS kerak deb o'ylardim</div><div class="cell-views">▶ 14,5K</div></div>
</div>
</body>
</html>
"""

os.makedirs('/app/applet/tmp/scholar-renders', exist_ok=True)
files = {
    'scholar-before.html': html_before,
    'scholar-after.html': html_after,
    'lidmagnit-reel-2.html': html_lidmagnit,
    'sotuv-otzivi.html': html_sotuv,
    'scholar-process.html': html_process,
    'scholar-visual.html': html_visual1,
    'scholar-visual-2.html': html_visual2,
}

for name, content in files.items():
    with open(f'/app/applet/tmp/scholar-renders/{name}', 'w') as f:
        f.write(content)
print('All 7 HTML templates written successfully!')
