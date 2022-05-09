import {Ability, AbilityBuilder, defineAbility} from '@casl/ability'


export default defineAbility((can) => {
    can('create', 'Todo');
    can('delete', 'Todo');
});


export function updateAbilityOn(ability) {
    const { cannot, rules } = new AbilityBuilder(Ability);
    cannot('create', 'Todo');
    cannot('delete', 'Todo');
    ability.update(rules);
}
export function updateAbilityOff(ability) {
    const { can, rules } = new AbilityBuilder(Ability);
    can('create', 'Todo');
    can('delete', 'Todo');
    ability.update(rules);
}

