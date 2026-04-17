import httpx

token = 'W1JDF1LwkQUsZbifcvCyPrse1KOKZz2l'
base = 'http://localhost:8055'
headers = {'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'}

r = httpx.get(f'{base}/items/products', headers=headers)
products = {p['slug']: p['id'] for p in r.json()['data']}
print('products:', products)

translations = [
    # English
    {'products_id': products['horse-ms30p'], 'languages_code': 'en', 'name': 'Horse-MS.30P', 'tag': 'Professional', 'description': 'A professional-grade equestrian simulator built for competitive sport and advanced training. Officially endorsed by the Hong Kong Jockey Club (HKJC) and CE certified (RED/EMC/LVD).'},
    {'products_id': products['pony-ms30'], 'languages_code': 'en', 'name': 'Pony-MS.30', 'tag': 'Educational', 'description': 'A smart equestrian simulator purpose-built for digital group instruction. Supports multi-unit networking, officially endorsed by the Hong Kong RDA, and CE certified (RED/EMC/LVD).'},
    {'products_id': products['ms20'], 'languages_code': 'en', 'name': 'Racehorse-MS.20', 'tag': 'Racing', 'description': 'A high-speed racing simulator designed for jockey training. Features a pneumatic-sensing saddle, weighs just 200KG, and can be deployed flexibly at training centers, racecourses, and exhibition venues.'},
    # Japanese
    {'products_id': products['horse-ms30p'], 'languages_code': 'ja', 'name': 'Horse-MS.30P', 'tag': 'プロフェッショナル', 'description': '競技スポーツと高度なトレーニングのために構築されたプロ級の馬術シミュレーター。香港ジョッキークラブ（HKJC）の公式認定を受け、CE認証（RED/EMC/LVD）を取得しています。'},
    {'products_id': products['pony-ms30'], 'languages_code': 'ja', 'name': 'Pony-MS.30', 'tag': '教育', 'description': 'デジタルグループ指導のために特化したスマート馬術シミュレーター。複数台ネットワークに対応し、香港RDAの公式認定を受け、CE認証（RED/EMC/LVD）を取得しています。'},
    {'products_id': products['ms20'], 'languages_code': 'ja', 'name': 'Racehorse-MS.20', 'tag': 'レーシング', 'description': 'ジョッキートレーニングのために設計された高速レーシングシミュレーター。空気圧検知サドルを搭載し、重量はわずか200KGで、トレーニングセンター、競馬場、展示会場などに柔軟に展開できます。'},
    # Korean
    {'products_id': products['horse-ms30p'], 'languages_code': 'ko', 'name': 'Horse-MS.30P', 'tag': '프로페셔널', 'description': '경기 스포츠와 고급 훈련을 위해 제작된 전문급 승마 시뮬레이터입니다. 홍콩 조키 클럽(HKJC)의 공식 인증을 받았으며 CE 인증(RED/EMC/LVD)을 획득했습니다.'},
    {'products_id': products['pony-ms30'], 'languages_code': 'ko', 'name': 'Pony-MS.30', 'tag': '교육용', 'description': '디지털 그룹 교육을 위해 특별히 제작된 스마트 승마 시뮬레이터입니다. 다중 장치 네트워킹을 지원하며, 홍콩 RDA의 공식 인증을 받았고 CE 인증(RED/EMC/LVD)을 획득했습니다.'},
    {'products_id': products['ms20'], 'languages_code': 'ko', 'name': 'Racehorse-MS.20', 'tag': '레이싱', 'description': '조키 훈련을 위해 설계된 고속 레이싱 시뮬레이터입니다. 공압 감지 안장을 갖추고 있으며, 무게는 단 200KG로 훈련 센터, 경마장, 전시회장 등에 유연하게 배치할 수 있습니다.'},
    # Spanish
    {'products_id': products['horse-ms30p'], 'languages_code': 'es', 'name': 'Horse-MS.30P', 'tag': 'Profesional', 'description': 'Un simulador de equitación de nivel profesional construido para el deporte competitivo y el entrenamiento avanzado. Endorsado oficialmente por el Hong Kong Jockey Club (HKJC) y certificado CE (RED/EMC/LVD).'},
    {'products_id': products['pony-ms30'], 'languages_code': 'es', 'name': 'Pony-MS.30', 'tag': 'Educativo', 'description': 'Un simulador de equitación inteligente diseñado específicamente para la instrucción digital en grupo. Soporta red de múltiples unidades, endoso oficial de Hong Kong RDA, y certificado CE (RED/EMC/LVD).'},
    {'products_id': products['ms20'], 'languages_code': 'es', 'name': 'Racehorse-MS.20', 'tag': 'Carreras', 'description': 'Un simulador de carreras de alta velocidad diseñado para el entrenamiento de jockeys. Cuenta con una silla de detección neumática, pesa solo 200KG y puede desplegarse de manera flexible en centros de entrenamiento, hipódromos y lugares de exhibición.'},
    # German
    {'products_id': products['horse-ms30p'], 'languages_code': 'de', 'name': 'Horse-MS.30P', 'tag': 'Professionell', 'description': 'Ein professioneller Reitsimulator für den Wettkampfsport und das fortgeschrittene Training. Offiziell vom Hong Kong Jockey Club (HKJC) empfohlen und CE-zertifiziert (RED/EMC/LVD).'},
    {'products_id': products['pony-ms30'], 'languages_code': 'de', 'name': 'Pony-MS.30', 'tag': 'Bildung', 'description': 'Ein intelligenter Reitsimulator, der speziell für digitalen Gruppenunterricht entwickelt wurde. Unterstützt Multi-Unit-Netzwerke, offiziell von Hong Kong RDA empfohlen und CE-zertifiziert (RED/EMC/LVD).'},
    {'products_id': products['ms20'], 'languages_code': 'de', 'name': 'Racehorse-MS.20', 'tag': 'Rennen', 'description': 'Ein Hochgeschwindigkeits-Rennsimulator für das Jockey-Training. Ausgestattet mit einer pneumatischen Sensing-Sattel, wiegt nur 200KG und kann flexibel in Trainingszentren, Rennbahnen und Ausstellungsorten eingesetzt werden.'},
    # Arabic
    {'products_id': products['horse-ms30p'], 'languages_code': 'ar', 'name': 'Horse-MS.30P', 'tag': 'احترافي', 'description': 'محاكي فروسية احترافي مصمم للرياضة التنافسية والتدريب المتقدم. معتمد رسمياً من نادي هونغ كونغ للسباق (HKJC) وحاصل على شهادة CE (RED/EMC/LVD).'},
    {'products_id': products['pony-ms30'], 'languages_code': 'ar', 'name': 'Pony-MS.30', 'tag': 'تعليمي', 'description': 'محاكي فروسية ذكي مصمم خصيصاً للتعليم الجماعي الرقمي. يدعم شبكة متعددة الوحدات، معتمد رسمياً من RDA هونغ كونغ وحاصل على شهادة CE (RED/EMC/LVD).'},
    {'products_id': products['ms20'], 'languages_code': 'ar', 'name': 'Racehorse-MS.20', 'tag': 'سباقات', 'description': 'محاكي سباقات عالي السرعة مصمم لتدريب الجوكي. مزود بسرج استشعار هوائي، يزن 200 كجم فقط ويمكن نشره بمرونة في مراكز التدريب وحلبات السباق ومواقع المعارض.'},
]

for t in translations:
    r = httpx.post(f'{base}/items/products_translations', headers=headers, json=t)
    print(f"{t['languages_code']} {t['name']}: {r.status_code}")

print('done')
