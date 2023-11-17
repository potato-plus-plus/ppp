<script>
let floor = 1;
let maxHealth = 10;
let currentHealth = 10;
let minDamageMult = 0.75;
let maxDamageMult = 1.25;
let strength = 3;
let defense = 0;
let damageTakenMult = 1;
let enemyType = "Slime";
let enemyHealth = 10;
let enemyStrength = 2;
let enemyDefense = -1;
let enemyDamageMult = 1;
let enemiesDefeated = 0;
let causeUpdate = () => {
        if (enemyHealth <= 0) {
            enemiesDefeated += 1
            enemyHealth = 5
        }
    };
</script>
<h1>Floor {floor}</h1>
<h3>Enemy: {enemyType}</h3>
<p>Enemy Health: {enemyHealth}</p>
<a
    on:click={() => {
        enemyHealth -= Math.round((strength - enemyDefense) * enemyDamageMult)
        causeUpdate
    }}>Click to Attack
</a>
<p>Your Health: {currentHealth}/{maxHealth}</p>
<p>Strength: {strength}</p>
<p>Defense: {defense}</p>
<p>Damage Taken: {damageTakenMult * 100}%</p>
<p>Enemies Defeated: {enemiesDefeated}</p>