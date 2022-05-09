import {AbilityBuilder, Ability} from '@casl/ability'


export function defineAbilitiesForAdmin() {
    const {rules, can} = AbilityBuilder.extract()
    can('create', 'Task')

    return new Ability(rules)
}

export function defineAbilitiesForPleb() {
    const {rules, can} = AbilityBuilder.extract()
    can('delete', 'Task')
    can('delete', 'TaskAll')

    return new Ability(rules)
}