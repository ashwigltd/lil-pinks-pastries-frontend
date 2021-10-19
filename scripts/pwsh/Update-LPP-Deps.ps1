Function Update-LPP-Deps {
    <#
    .SYNOPSIS
        Updates dependencies for the frontend Node.js NPM package used to
        build the frontend of Lil Pink's Pastries website.


    .NOTES
        Name: Update-LPP-Deps
        Author: Ash Hellwig <ash@ashwigltd.com> (https://ash.ashwigltd.com)
        Version: 0.1
        DateCreated: 2021-Oct-18


    .EXAMPLE
        Update-LPP-Deps -UserPrincipalName "username@thesysadminchannel.com"


    .LINK
        https://github.com/ashwigltd/lil-pinks-pastries-frontend/blob/main/scripts/Update-LPP-Deps.ps1
    #>

    [CmdletBinding()]
    param(
        [Parameter(
            Mandatory = $false,
            ValueFromPipeline = $true,
            ValueFromPipelineByPropertyName = $true,
            Position = 0
        )]
        [string[]]  $ProjectDir
    )

    BEGIN {
        Write-Host `
            -ForegroundColor DarkYellow `
            'Beginning to Update Project Deps.'
    }

    PROCESS {
        $NpmCheckUpdatesPackage = (
            npm list -g | Select-String 'npm-check-updates'
        ) -join "`n"

        if ($?) {
            if ($PSBoundParameters['Verbose'] `
                -or $VerbosePreference `
                -eq 'Continue') {
                Write-Host "NpmCheckUpdatesPackage: ($NpmCheckUpdatesPackage)"
            }

            ncu -u
            npm update
        }
    }

    END {
        if ($?) {
            Write-Host `
                -ForegroundColor Green `
                'Finished Updating Project Deps.'
        } else {
            Write-Host `
                -ForegroundColor Red `
                'Failed to Update Deps.'
        }
    }
}
